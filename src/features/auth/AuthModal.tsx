import { goCreateUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase"
import { useState } from "react"
import Modal from "../../components/Modal"
import Section from "../../components/Section"
import Stacked from "../../components/Stacked"
import Button from "../../components/Button"

interface FormInfo {
    email: string;
    password: string;
    repeatPassword: string;
    username: string;
  }

export default function AuthModal () {
    const [formInfo, setFormInfo] = useState<FormInfo>({
        email: '',
        password: '',
        repeatPassword: '',
        username: '',
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setFormInfo(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    
    const handleCreateUserWithEmail = async (e :React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const user  = await goCreateUserWithEmailAndPassword(formInfo.email, formInfo.password)
    }

    const handleCreateUserWithGoogle = async () =>{
        const user = await signInWithGooglePopup()
        console.log('user from component', user)
    }

    
    return (
        <>
        <Modal>
            <Section>
                <form onSubmit={handleCreateUserWithEmail}>
                    <Stacked>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' value={formInfo.email} onChange={handleChange}/>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={formInfo.password} onChange={handleChange} />
                        <label htmlFor='username'>Username</label>
                        <input id='username' name='username' value={formInfo.username} onChange={handleChange} />
                        <button type='submit' className="text-gold bg-darkGreen border-solid rounded-xl border-gold border-4 p-3 m-2 text-xl">Enter</button>
                        <Button onClick={handleCreateUserWithGoogle}>Sign in with Google</Button>
                    </Stacked>
                </form>
            </Section>
        </Modal>
        </>
    )
}