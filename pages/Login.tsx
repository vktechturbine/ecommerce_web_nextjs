import React, { useState } from 'react';
import Header from './Header';
import Image from 'next/image';
import '../styles/login.css';
import Footer from './Footer';
const Login = () => {
  const [isRegister, setRegister] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    UserName: "",
    Password: "",
    ConfirPassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    localStorage.setItem('guestUser', JSON.stringify(formData));
    setFormData({
      Email: "",
      UserName: "",
      Password: "",
      ConfirPassword: "",
    });
    setRegister(!isRegister);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    const login = JSON.parse(localStorage.getItem('guestUser'));
    if(login.UserName === formData.UserName && login.Password === formData.Password)
    {
      console.log('login SuccessFull');
    }
    else{
      console.log('please fill correct Data');
    }
    setFormData({
      Email: "",
      UserName: "",
      Password: "",
      ConfirPassword: "",
    });
  }

  return (
    <div className="login">
      <div className="contact-header">
        <Header />
      </div>

      <div className="center">
        <div className="login__image">
          <Image src="https://as1.ftcdn.net/v2/jpg/01/45/19/76/1000_F_145197600_rYWzKzMBC69xds3FAPvAWHV6fwITY8ZF.jpg" className="object-cover rounded-lg" fill alt="kokan image" />
        </div>
        <div className="login__content">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={isRegister ? handleSubmit : handleLogin}>
            {isRegister && <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input onChange={handleChange} name="Email" value={formData.Email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
            </div>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input onChange={handleChange} name="UserName" value={formData.UserName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={handleChange} name="Password" value={formData.Password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            {isRegister && <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input onChange={handleChange} name="ConfirPassword" value={formData.ConfirPassword} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>}
            <div className="flex items-center justify-between">
              <button onClick={() => setRegister(!isRegister)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                {isRegister ? 'Sign In' : 'Sign Up'}
              </button>
              {isRegister ? <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button> : <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>}


            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>



      <div className="footer">
        <Footer />
      </div>
    </div>



  );
}

export default Login;
