const MENUS = [
    {
        to: "/",
        title: "Dashboard",
        label: (
            <>
                <i className="bi bi-house"></i>
                <span className="ms-2">Dashboard</span>
            </>
        )
    },

    {
        category: (
            <>
                <i className="bi bi-folder"></i>
                <span className="ms-2">Content</span>
            </>
        ),
        menus: [
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
                to: "/pages",
                title: "Pages",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text"></i>
                        <span className="ms-2">Pages</span>
                    </>
                )
            }
        ]
    }
];

export default MENUS;
