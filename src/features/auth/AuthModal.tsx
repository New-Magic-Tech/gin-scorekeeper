import { goCreateUserWithEmailAndPassword, signInWithGooglePopup, goSignInWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase"
import { useState } from "react"
import Modal from "../../components/Modal"
import Section from "../../components/Section"
import Stacked from "../../components/Stacked"
import Button from "../../components/Button"

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectUserDoc, selectSignedIn, displayAuthModal } from './authSlice'
import { setUserDoc, setSignedIn } from './authSlice'

interface FormInfo {
    email: string;
    password: string;
    repeatPassword: string;
    username: string;
  }

  interface UserDoc {
    uid: Number,
    userName: string,
    games:[]
}



export default function AuthModal () {
    const dispatch = useAppDispatch()

    const [formInfo, setFormInfo] = useState<FormInfo>({
        email: '',
        password: '',
        repeatPassword: '',
        username: '',
    })

    const [showRegister, setShowRegister] = useState<boolean>(false)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setFormInfo(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    
    const handleCreateUserWithEmail = async () =>{
        goCreateUserWithEmailAndPassword(formInfo.email, formInfo.password)
        .then((user)=> handleSignIn(user))
        .catch((error)=> console.log(error))
    }

    const handleAuthWithGoogle = async () =>{
        signInWithGooglePopup()
        .then((user)=> handleSignIn(user))
        .catch((error)=> console.log(error))
    }

    const handleSignInWithEmail = async () =>{
        goSignInWithEmailAndPassword(formInfo.email, formInfo.password)
        .then((user)=> handleSignIn(user))
        .catch((error)=> console.log('in email', error))
      
    }

    const handleSignIn = (user : any) =>{
        if(user){
            createUserDocumentFromAuth(user)
            .then((userDoc)=> {
                if (userDoc !== null){
                const newUserDoc : UserDoc = {
                    uid: userDoc.uid,
                    userName: userDoc.userName,
                    games: userDoc.games
                }
                dispatch(setUserDoc({userDoc: newUserDoc}))
                }
            })
            dispatch(setSignedIn(true))
            dispatch(displayAuthModal(false))
        }
    }

    const handleClose = () =>{
        dispatch(displayAuthModal(false))
    }

    return (
        <>
        <Modal clickExit={handleClose}>
            {showRegister?
            <Section>
                
                    <Stacked>
                        <h2 className="text-decoration-line: underline text-xl mb-4 text-red">Register</h2>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' value={formInfo.email} onChange={handleChange}/>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={formInfo.password} onChange={handleChange} />
                        <label htmlFor='username'>Username</label>
                        <input id='username' name='username' value={formInfo.username} onChange={handleChange} />
                        <button onClick={handleCreateUserWithEmail} className="text-gold bg-darkGreen border-solid rounded-xl border-gold border-4 p-3 m-2 text-xl">Enter</button>
                        <Button onClick={handleAuthWithGoogle}>Sign in with Google</Button>
                        <button className="text-blue" onClick={()=>setShowRegister(false)}>Sign in</button>
                    </Stacked>
                
            </Section>
            :<Section>
            
                    <Stacked>
                        <h2 className="text-decoration-line: underline text-xl mb-4 text-red">Sign In</h2>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' value={formInfo.email} onChange={handleChange}/>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={formInfo.password} onChange={handleChange} />
                        <button onClick={handleSignInWithEmail} className="text-gold bg-darkGreen border-solid rounded-xl border-gold border-4 p-3 m-2 text-xl">Enter</button>
                        <Button onClick={handleAuthWithGoogle}>Sign in with Google</Button>
                        <button className="text-blue" onClick={()=>setShowRegister(true)}>Register</button>
                    </Stacked>
               
            </Section>}
        </Modal>
        </>
    )
}