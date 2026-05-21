import { useState, forwardRef } from "react";

/**
 * Komponen InputText
 * ------------------------------------------------------
 * Komponen input text reusable berbasis Bootstrap
 * dengan dukungan controlled & uncontrolled mode.
 *
 * Fitur utama:
 *
 * - Controlled & uncontrolled mode
 * - Mendukung seluruh tipe input HTML
 * - Forward ref support
 * - Floating label Bootstrap
 * - Custom styling support
 *
 * @param {Object} props - Properti komponen
 * @param {string|ReactNode} props.label - Label input
 * @param {string} [props.className=""] - Class tambahan wrapper
 * @param {string} [props.type="text"] - Tipe input HTML
 * @param {string} [props.placeholder=""] - Placeholder input
 * @param {string} props.value - Nilai input (controlled mode)
 * @param {string} [props.defaultValue=""] - Nilai awal (uncontrolled mode)
 * @param {Function} props.onChange - Callback saat nilai berubah
 * @param {string} props.id - ID input
 */
const InputText = forwardRef(({
    label,
    className = "",
    type = "text",
    placeholder = "",
    value,
    defaultValue = "",
    onChange,
    id,
    ...props
}, ref) => {
    /** Menentukan apakah komponen berjalan dalam mode controlled */
    const isControlled = value !== undefined;
    /** State internal untuk mode uncontrolled */
    const [internalValue, setInternalValue] = useState(defaultValue);
    /** Nilai aktif input */
    const inputValue = isControlled ? value : internalValue;

    /** Handler perubahan nilai input. */
    const handleChange = (e) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
    };

    return (
        <div className={`form-floating ${className || "mb-3"}`}>
            <input
                ref={ref}
                {...props}
                type={type}
                onChange={handleChange}
                value={inputValue}
                className="form-control rounded-4 px-3"
                id={id}
                required
                placeholder={placeholder}
            />
            <label className="ms-1" htmlFor={id}>{label}</label>
        </div>
    );
});

InputText.displayName = "InputText";
export default InputText;