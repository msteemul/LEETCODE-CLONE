import React, {useEffect, useState} from 'react';
import { Button, InputField} from '../global/index';
import { useSetRecoilState } from 'recoil';
import {authModalState} from '../../Atoms/authModalAtoms';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase';
import { useRouter } from 'next/router';


type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    const router = useRouter();
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type:'login') => {
        setAuthModalState((prevState) => ({
            ...prevState,type
        }))

    };
    const [input, setInput] = useState({email:'',name:'',password:''})
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput((prev)=>({
            ...prev,
            [e.target.name]:e.target.value

        }))
    }

    const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input.email || !input.password || !input.name) return alert('Please add all the fields')
       try{
        const newUser = await createUserWithEmailAndPassword(input.email, input.password)
        if(!newUser) return;
        router.push('/')

       } catch(err:any) {
        console.log(err.message)

       }
    }

    useEffect(() => {
        if(error) {
            alert(error.message)
        }

    },[error])



    
    return (
    <form className=' space-y-6 px-6 py-4' onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'>Register to leetclone</h3>
    <InputField label='Email' type='email' name='email' placeholder='Enter your email' onChange={handleChangeInput} />
    <InputField label='Name' type='Name' name='Name' placeholder='Enter your name' onChange={handleChangeInput}/>
    <InputField label='Password' type='password' name='password' placeholder='Enter your password' onChange={handleChangeInput}/>
    <div className='flex flex-col gap-3'>
    <Button type='submit'>Register</Button>
    </div>
    <div className='text-sm font-medium text-gray-300'>
       Already have an account?
        <a href='#' className='text-blue-700 hover:underline' onClick={()=>handleClick('login')}>Login</a>

    </div>

</form>
)
}
export default SignUp;