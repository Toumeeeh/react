import { useState } from "react";
import "../LoginPage/Login.css"
import logo from '../../assets/Login/logo.png'
import { FaUser,FaLock  } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";




const Login = () => {

  const sub= useState("Our amazing learning mangement system , you can moderate the mobile app content, view the courses and get to see more details about us.")
  const LogoName = useState("Bubble Nerds")
  const Admin = useState("Admim Login")
  const Subs = useState("Please enter your email and password to log in :")


  const [email,setEmail] = useState('');
  const [password,setPassowrd] = useState('');
  const [message, setMessage] = useState('');

  const navigate1 = useNavigate()

    function handleSignIn(e){

        axios.post('http://127.0.0.1:8080/api/user/auth/loginAsAdmin',{
            email:email,
            password:password,
        }).then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.data.access_token)
            setMessage('Login successful!');
            navigate1('/HomePage');


        }).catch((error)=>{
            setMessage('Invalid username or password');
        })
    };

    
    return ( 
    <>
    
    
    
    <div className=" row mx-5 mb-5  all "
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">

        <div className="col-5  wrapper mx-5 mt-5 mb-5"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">

                        <div className="row ">
                                
                            <h1 className="mt-2 mb-3 mt-5">{Admin}</h1>
                                
                            <div className="fs-6 text-black-50 d-flex justify-content-center align-items-center">
                                {Subs}
                                </div>

                            <div  className="input-box d-flex justify-content-center align-items-center">
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} 
                                placeholder="Email" required/>
                                <FaUser className="icon" /> 
                            </div>

                            <div  className="input-box d-flex justify-content-center align-items-center">
                                <input type="password" value={password} onChange={(e)=>setPassowrd(e.target.value)} 
                                placeholder="Password" required/>
                                <FaLock className="icon"/> 
                            </div>
                            
                            <div className="d-flex justify-content-center align-items-center">
                            <button  onClick={handleSignIn} type="submit">Login</button>
                            </div>
                           <div className="mt-2 fs-6 text-center text-danger"> {message && <p>{message}</p>}</div>
                        </div>  
                    </div> 
         <div className="col-6 mt-5"> 
                     <div className='  right_side  d-flex justify-content-left align-items-center'>
                            <img className='logo_img_login' src={logo} alt="logo" />
                            <h3 className='bubble_login'>{LogoName}</h3>
                        </div>
                        <div className="sub_login fs-4 mt-3 ">{sub}</div>
             </div>
        
                

                
         </div>
       
        
    
    
    </> 

    );
}
 
export default Login;