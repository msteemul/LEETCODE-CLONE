import React from 'react';
import InputField from '../global/InputField';
import Button from '../global/Button';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form className=' space-y-6 px-6 py-4'>
        <h3 className='text-xl font-medium text-white'>Sign In to leetclone</h3>
        <InputField label='Email' type='email' name='email' placeholder='Enter your email' />
        <InputField label='Password' type='password' name='password' placeholder='Enter your password' />
        <Button type='submit'>Sign In</Button>

    </form>
}
export default Login;