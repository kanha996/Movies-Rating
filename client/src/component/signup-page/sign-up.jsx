import React from 'react';

function Signup() {

    
    return (
        <div className='signup-main'>
            <div className='signup-wrapper'>
                <div className='input'>
                    <span className='txt'>USER - ID</span>
                    <input type="text" className='txt-box'/>
                </div>
                <div className='input'>
                    <span className='txt'>fullName</span>
                    <input type="text" className='txt-box'/>
                </div>
                <div className='input'>
                    <span className='txt'>email</span>
                    <input type="text" className='txt-box'/>
                </div>
                <div className='input'>
                    <span className='txt'>passWord</span>
                    <input type="password" className='txt-box'/>
                </div>
                <button className='sign-up-btn'> signup </button>
                <button className='login'> login </button>
            </div>

        </div>
    );
}

export default Signup;