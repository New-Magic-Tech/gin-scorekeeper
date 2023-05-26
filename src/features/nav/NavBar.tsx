import NavLink from "./NavButton"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectSignedIn, displayAuthModal, setSignedIn } from "../auth/authSlice"
import { goSignOut } from "../../utils/firebase"

import { useNavigate } from "react-router-dom";


export default function NavBar (){
    const navigate = useNavigate()
    const signedIn = useAppSelector(selectSignedIn)
    const dispatch = useAppDispatch()

    const handleSignOut = async() =>{
        dispatch(setSignedIn(false))
        const signedout  = goSignOut()
    }

    return (
        <div className = 'bg-stone-800 position-sticky h-10 w-screen'>
            <div className = 'flex items-center h-full'>
            {signedIn?
                <>
                    <NavLink onClick={()=>navigate('/')}>Scorekeeper</NavLink>
                    <NavLink onClick={()=>navigate('/games')}>Games</NavLink>
                    <NavLink onClick={()=>navigate('/options')}>Options</NavLink>
                    <NavLink onClick={handleSignOut}>Sign Out</NavLink>
                </>
                :
                <>
                    <NavLink onClick={()=>navigate('/')}>Scorekeeper</NavLink>
                    <NavLink onClick={()=>navigate('/options')}>Options</NavLink>
                    <NavLink onClick={()=>dispatch(displayAuthModal(true))}>Sign In</NavLink>
                </>
            }   
            </div>

        </div>
    )
}