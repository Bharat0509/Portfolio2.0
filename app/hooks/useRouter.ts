import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { BsPerson, BsFileText } from "react-icons/bs";

import { VscFileSubmodule } from "react-icons/vsc";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(
        () => [
            {
                label: "Home",
                href: "/",
                icon: AiOutlineHome,
                active: pathname === "/",
            },
            {
                label: "About",
                href: "/about",
                icon: BsPerson,
                active: pathname === "/about",
            },
            {
                label: "Resume",
                href: "/resume",
                icon: BsFileText,
                active: pathname === "/resume",
            },
            {
                label: "Works",
                href: "/works",
                icon: VscFileSubmodule,
                active: pathname === "/works",
            },
            {
                label: "Contact",
                href: "/contact",
                icon: MdOutlinePermContactCalendar,
                active: pathname === "/contact",
            },
        ],
        [pathname]
    );
    return routes;
};
export default useRoutes;
