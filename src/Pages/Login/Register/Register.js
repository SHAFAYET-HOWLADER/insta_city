import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { async } from '@firebase/util';
import Loading from '../../Shared/Header/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile] = useUpdateProfile(auth);
      if(user){
        navigate('/home')
      }
      let createError;
      if(error){
        createError =  <p>
              Error : {error.message};
          </p>
      }
      let spinner;
      if(loading){
        spinner = <Loading></Loading>
      }
      const createUserHandler = async (event)=>{
         event.preventDefault()
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value;
         await createUserWithEmailAndPassword(email, password)
         await updateProfile({ displayName : name});
      }
    return (
        <section id="register">
            <div className='container'>
                <form className='form_area' onSubmit={createUserHandler}>
                    <h3>Please Register </h3>
                    <div className='input_group'>
                        <label htmlFor='name'>You Name</label>
                        <input type='name' name='name' id='name' placeholder='Your Name' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='email'>You Email</label>
                        <input type='email' name='email' id='email' placeholder='Your Email' required/>
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password'>You Password</label>
                        <input type='password' name='password' id='password' placeholder='Your Password' required/>
                         <input onClick={()=>setAgree(!agree)} type='checkbox' name='terms' id='terms'/>
                         &nbsp; &nbsp;
                         <label className={agree ? 'text-success' : 'text-danger'} htmlFor='terms'>Agree terms and condition ?</label>
                        <input disabled={!agree} className='my-4 login_btn' type='submit' value='Register' />
                        {createError}
                        {spinner}
                        <div className='refer_register'>
                            <p>Already have an account ? <Link to='/login'>
                                <button>Login &nbsp; <FaArrowRight></FaArrowRight> </button>
                            </Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;