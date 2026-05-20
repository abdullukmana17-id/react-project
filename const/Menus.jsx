import User from "./User";

const MENUS = [
    {
        to: "/",
        title: "Muroja`ah",
        label: (
            <>
                <i className="bi bi-crosshair2"></i>
                <span className="ms-2">Muroja`ah</span>
            </>
        )
    },
    {
        to: "/quran",
        title: "Al - Qur`an",
        label: (
            <>
                <i className="bi bi-inboxes"></i>
                <span className="ms-2">Al - Qur`an</span>
            </>
        )
    },
    {
        to: "/builder",
        title: "Page Builder",
        label: (
            <>
                <i className="bi bi-layout-text-window-reverse"></i>
                <span className="ms-2">Page Builder</span>
            </>
        )
    },
    {
        to: "/bandwidth",
        title: "Bandwidth",
        label: (
            <>
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2">Bandwidth</span>
            </>
        )
    }
];

export default MENUS;