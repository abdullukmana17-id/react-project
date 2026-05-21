import { useState } from "react";

const Code = ({ children }) => {
    const [status, setStatus] = useState("idle");

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(String(children));
            setStatus("copied");
            setTimeout(() => setStatus("idle"), 2000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2000);
        }
    };

    const icon = {
        idle: "bi-copy",
        copied: "bi-check-lg",
        error: "bi-x-lg",
    }[status];

    return (
        <code className="badge">
            {children}<i type="button" onClick={handleCopy} className={`bi ${icon} ms-2`} />
        </code>
    );
};

export default Code;