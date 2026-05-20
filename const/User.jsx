import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from ".";

let cachedData = null;
let cachedPromise = null;

export default function User() {
    const [data, setData] = useState(cachedData || null);
    const [loading, setLoading] = useState(!cachedData);
    const [error, setError] = useState(null);

    const fetchMe = useCallback(() => {
        if (cachedData) return Promise.resolve({ data: cachedData });

        if (!cachedPromise) {
            cachedPromise = fetch(`${BASE_URL}/api/v1/user`)
                .then(res => res.json())
                .then(res => {
                    if (!res?.status || res?.status === 404) {
                        throw new Error(res?.messages?.error || "User tidak ditemukan");
                    }
                    cachedData = res?.data || null;
                    return res;
                })
                .catch(err => {
                    cachedPromise = null;
                    throw err;
                });
        }

        setLoading(true);
        setError(null);

        return cachedPromise
            .then(res => {
                setData(res?.data || null);
                return res;
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!cachedData) {
            fetchMe();
        }
    }, [fetchMe]);

    return {
        data,
        setData,
        loading,
        error,
        refetch: () => {
            cachedData = null;
            cachedPromise = null;
            return fetchMe();
        },
    };
}