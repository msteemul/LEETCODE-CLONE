import React from 'react';
import {GhostButton, Button, InputField} from '../global/index';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
    <form className=' space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
    <h3 className='text-xl font-medium text-white'>Reset Password</h3>
    <p className='text-sm text-white'>Forgotten Your Password?Enter your email below and we shall send you a link to reset it</p>
    <InputField label='Email' type='email' name='email' placeholder='Enter your email' />
    <div className='flex flex-col gap-3'>
    <Button type='submit'>Reset Password</Button>
    </div>

</form>
);
}
export default ResetPassword;