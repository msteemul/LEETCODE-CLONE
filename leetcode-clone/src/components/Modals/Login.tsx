import React from 'react';
import {GhostButton, Button, InputField} from '../global/index';
import { useSetRecoilState } from 'recoil';
import {authModalState} from '../../Atoms/authModalAtoms';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type:'login' |'register'|'forgotPassword') => {
        setAuthModalState((prevState) => ({
            ...prevState,type
        }))

    };
    
    return (<form className=' space-y-6 px-6 py-4'>
        <h3 className='text-xl font-medium text-white'>Sign In to leetclone</h3>
        <InputField label='Email' type='email' name='email' placeholder='Enter your email' />
        <InputField label='Password' type='password' name='password' placeholder='Enter your password' />
        <div className='flex flex-col gap-3'>
        <Button type='submit'>Sign In</Button>
        <GhostButton onClick={()=>handleClick("forgotPassword")}>Forgot password?</GhostButton>
        </div>
        <div className='text-sm font-medium text-gray-300'>
            Not registered?
            <a href='#' className='text-blue-700 hover:underline' onClick={()=>handleClick("register")}>Create account</a>

        </div>

    </form>);
}
export default Login;