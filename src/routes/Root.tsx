import AuthModal from "../features/auth/AuthModal";
import NavBar from "../features/nav/NavBar";
import { Outlet } from "react-router-dom";


import { useAppSelector } from "../app/hooks";

export default function Root() {
    const displayAuthModal = useAppSelector((state) => state.auth.displayAuthModal)
    return (
        <div className="mb-[100px] sm:mb-0">
            {displayAuthModal && <AuthModal/>}
            <NavBar/>
            <Outlet/>
        </div>
    );
    }