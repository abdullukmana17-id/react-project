import { useState, Fragment, useRef, useId, useEffect, cloneElement } from "react";
const { Modal } = window.bootstrap;
import Input from ".";
import ModalPortal from "./ModalPortal";

/**
 * Komponen InputRadio
 * ------------------------------------------------------
 * Komponen radio / checkbox selection berbasis modal
 * Bootstrap dengan fitur pencarian dan navigasi keyboard.
 *
 * Fitur utama:
 *
 * - Single & multiple selection
 * - Controlled & uncontrolled mode
 * - Search filtering
 * - Keyboard navigation
 * - Modal integration
 * - Custom trigger button
 * - Touch & accessibility support
 * - Arabic text support
 * - Dynamic option rendering
 *
 * @param {Object} props - Properti komponen
 * @param {string} props.label - Label utama input
 * @param {string} [props.className=""] - Class tambahan trigger
 * @param {string|Array} props.value - Nilai aktif (controlled mode)
 * @param {string|Array} props.defaultValue - Nilai awal (uncontrolled mode)
 * @param {Function} props.onChange - Callback saat nilai berubah
 * @param {Array} [props.options=[]] - Daftar opsi pilihan
 * @param {string} props.placeholder - Placeholder input pencarian
 * @param {string} props.parentModalId - ID parent modal
 * @param {boolean} [props.isMultiple=false] - Mode multiple selection
 * @param {boolean} [props.isArabic=false] - Mengaktifkan mode teks Arab
 * @param {boolean} [props.enableSearch=true] - Menampilkan input pencarian
 * @param {ReactNode|Function} props.customButton - Custom trigger button
 */
const InputRadio = ({
    label,
    className = "",
    value,
    defaultValue,
    onChange,
    options = [],
    placeholder,
    parentModalId,
    isMultiple = false,
    isArabic = false,
    enableSearch = true,
    customButton = null,
}) => {
    /** Menentukan default value berdasarkan mode selection */
    const resolvedDefault = defaultValue ?? (isMultiple ? [] : "");
    /** Menentukan apakah komponen berjalan dalam mode controlled */
    const isControlled = value !== undefined;
    /** State internal untuk menyimpan nilai pilihan */
    const [internalValue, setInternalValue] = useState(resolvedDefault);
    /** Reference elemen modal Bootstrap */
    const modalRef = useRef(null);
    /** Menyimpan instance Bootstrap Modal */
    const modalInstance = useRef(null);
    /** State keyword pencarian */
    const [search, setSearch] = useState("");
    /** ID unik komponen untuk accessibility & modal target */
    const id = useId();
    /** Reference input pencarian */
    const inputRef = useRef(null);
    /** Index item aktif untuk keyboard navigation */
    const [activeIndex, setActiveIndex] = useState(0);
    /** Reference seluruh item option */
    const itemRefs = useRef([]);
    /** Reference tombol close modal */
    const buttonClose = useRef(null);
    /** Nilai aktif komponen */
    const currentVal = isControlled ? value : internalValue;

    /** Mengecek apakah option sedang dipilih. */
    const isSelected = (optVal) =>
        isMultiple ? currentVal.includes(optVal) : currentVal === optVal;

    /** Handler ketika user memilih option. */
    const handleSelect = (optVal) => {
        let nextVal;

        /** Mode multiple selection */
        if (isMultiple) {
            nextVal = isSelected(optVal)
                ? currentVal.filter((v) => v !== optVal)
                : [...currentVal, optVal];
        } else {
            nextVal = optVal;
        }

        /** Update state internal jika uncontrolled */
        if (!isControlled) setInternalValue(nextVal);
        /** Callback perubahan nilai */
        onChange?.({ target: { value: nextVal, id } });

        /** Tutup modal otomatis pada single selection */
        if (!isMultiple) {
            closeModal();
        }
    };

    /** Menutup modal aktif. */
    const closeModal = () => {
        if (parentModalId) {
            buttonClose.current?.click();
        } else {
            modalInstance.current?.hide();
        }
    };

    /** Label yang ditampilkan pada trigger button. */
    const triggerLabel = (() => {
        if (isMultiple) {
            if (!currentVal.length) return null;
            const selected = options.filter((o) => currentVal.includes(o.value));
            return selected.length === 1
                ? selected[0].label
                : `${selected.length} dipilih`;
        }
        const found = options.find((o) => o.value === currentVal);
        return found?.label ?? null;
    })();

    /** Filtering option berdasarkan keyword pencarian. */
    const filteredOptions = enableSearch
        ? options.filter((opt) =>
            opt.label.toLowerCase().includes(search.toLowerCase())
        )
        : options;

    /** Lifecycle modal & global listener. */
    useEffect(() => {
        const modalEl = modalRef.current;
        if (!modalEl) return;

        modalInstance.current = new Modal(modalEl, { keyboard: false });

        const handler = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                closeModal();
            }
        };

        const onShow = () => {
            history.pushState({ modal: id }, "");
        };

        const onHide = () => {
            if (history.state?.modal === id) {
                history.back();
            }
        };

        const onPopState = () => {
            if (modalEl.classList.contains("show")) {
                closeModal();
            }
        };

        window.addEventListener("keydown", handler);
        window.addEventListener("popstate", onPopState);

        const onShown = () => enableSearch && inputRef.current?.focus();
        modalEl.addEventListener("shown.bs.modal", onShown);
        modalEl.addEventListener("show.bs.modal", onShow);
        modalEl.addEventListener("hide.bs.modal", onHide);

        return () => {
            window.removeEventListener("keydown", handler);
            window.removeEventListener("popstate", onPopState);
            modalEl.removeEventListener("shown.bs.modal", onShown);
            modalEl.removeEventListener("show.bs.modal", onShow);
            modalEl.removeEventListener("hide.bs.modal", onHide);
        };
    }, [enableSearch]);

    useEffect(() => setActiveIndex(0), [search]);

    useEffect(() => {
        itemRefs.current[activeIndex]?.scrollIntoView({ block: "center" });
    }, [activeIndex]);

    const handleKeyDown = (e) => {
        if (!filteredOptions.length) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev < filteredOptions.length - 1 ? prev + 1 : prev
                );
                break;

            case "ArrowUp":
                e.preventDefault();
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
                break;

            case "Enter":
                e.preventDefault();
                const selected = filteredOptions[activeIndex];
                if (selected) handleSelect(selected.value);
                break;

            case "Escape":
                e.preventDefault();
                closeModal();
                break;

            default:
                break;
        }
    };

    const modalTriggerProps = {
        "data-bs-toggle": "modal",
        "data-bs-target": `#${id}`,
    };

    const renderTrigger = () => {
        if (customButton) {
            return typeof customButton === "function"
                ? customButton({ ...modalTriggerProps, triggerLabel })
                : cloneElement(customButton, modalTriggerProps);
        }

        return (
            <button
                {...modalTriggerProps}
                type="button"
                className={`${className || "mb-3"} card w-100 rounded-4 bg-white form-card justify-content-center`}
            >
                <div className="card-body py-0 px-3 flex-grow-0 d-flex align-items-center flex-nowrap gap-3 justify-content-between">
                    <p className="m-0 text-muted font-sans text-truncate">{label}</p>
                    {triggerLabel && (
                        <span className="badge text-truncate">
                            {triggerLabel}
                        </span>
                    )}
                </div>
            </button>
        );
    };

    return (
        <>
            {/* ── Trigger button ─────────────────────────────────────────── */}
            {renderTrigger()}

            {/* ── Modal ──────────────────────────────────────────────────── */}
            <ModalPortal>
                <div
                    ref={modalRef}
                    className="modal fade"
                    id={id}
                    tabIndex="-1"
                    aria-labelledby={`${id}Label`}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                {enableSearch ? (
                                    <Input
                                        ref={inputRef}
                                        onKeyDown={handleKeyDown}
                                        className="flex-grow-1"
                                        type="text"
                                        label={
                                            <>
                                                <i className="bi bi-search me-2"></i>
                                                {placeholder}
                                            </>
                                        }
                                        placeholder={`Cari ${label}`}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                ) : (
                                    <h5 className="m-0 flex-grow-1">{label}</h5>
                                )}
                                <button
                                    ref={buttonClose}
                                    type="button"
                                    className="btn-close ms-3 border-0 me-0 shadow-none"
                                    {...(parentModalId
                                        ? {
                                            "data-bs-toggle": "modal",
                                            "data-bs-target": `#${parentModalId}`,
                                        }
                                        : {
                                            "data-bs-dismiss": "modal",
                                            "aria-label": "Close",
                                        })}
                                ></button>
                            </div>

                            <div className="modal-body">
                                {filteredOptions.length > 0 ? (
                                    <div className={`list-group list-group-form border border-secondary-subtle d-flex flex-column p-1 gap-1 bg-white rounded-4 ${isArabic ? "arabic" : ""}`}>
                                        {filteredOptions.map((opt, index) => {
                                            const isActive = index === activeIndex;
                                            const isItemSelected = isSelected(opt.value);
                                            return (
                                                <Fragment key={opt.value}>
                                                    <li
                                                        ref={(el) => (itemRefs.current[index] = el)}
                                                        type="button"
                                                        role={isMultiple ? "checkbox" : "radio"}
                                                        aria-checked={isItemSelected}
                                                        onClick={() => handleSelect(opt.value)}
                                                        className={`list-group-item list-group-item-action d-flex align-items-center gap-3${isItemSelected || isActive ? " active" : ""}`}
                                                        aria-current={isItemSelected}
                                                        {...(!isMultiple && parentModalId && {
                                                            "data-bs-toggle": "modal",
                                                            "data-bs-target": `#${parentModalId}`,
                                                        })}
                                                    >
                                                        <div className={`icon rounded-2 ${isItemSelected ? "" : "opacity-50"}`}>
                                                            {index + 1}
                                                        </div>
                                                        {opt.label}
                                                        <i
                                                            className={`bi bi-check-square${isItemSelected ? "-fill" : " opacity-25"} fs-5 ms-auto`}
                                                        />
                                                    </li>
                                                    {index < filteredOptions.length - 1 && (
                                                        <hr className="mx-2 my-0 opacity-25" />
                                                    )}
                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className="text-center font-sans">Data tidak ditemukan</p>
                                )}
                            </div>

                            <div className="modal-footer border-top-0 d-flex justify-content-between align-items-center">
                                <small className="text-muted d-none d-sm-block">
                                    <span className="me-3">
                                        <i className="bi bi-arrow-up"></i>
                                        <i className="bi bi-arrow-down ms-1"></i>
                                        <span className="ms-2">Navigasi</span>
                                    </span>
                                    <span className="me-3">
                                        <i className="bi bi-arrow-return-left"></i>
                                        <span className="ms-2">Pilih</span>
                                    </span>
                                    <span>
                                        <kbd className="badge font-monospace">ESC</kbd>
                                        <span className="ms-2">Tutup</span>
                                    </span>
                                </small>

                                {isMultiple && (
                                    <button type="button" className="ms-auto btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${parentModalId}`}>Simpan</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalPortal>
        </>
    );
};

export default InputRadio;