import React from 'react';
import { Button, InputField} from '../global/index';
import { useSetRecoilState } from 'recoil';
import {authModalState} from '../../Atoms/authModalAtoms';


type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type:'login') => {
        setAuthModalState((prevState) => ({
            ...prevState,type
        }))

    };
    
    return (
    <form className=' space-y-6 px-6 py-4'>
    <h3 className='text-xl font-medium text-white'>Register to leetclone</h3>
    <InputField label='Email' type='email' name='email' placeholder='Enter your email' />
    <InputField label='Name' type='Name' name='Name' placeholder='Enter your name' />
    <InputField label='Password' type='password' name='password' placeholder='Enter your password' />
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