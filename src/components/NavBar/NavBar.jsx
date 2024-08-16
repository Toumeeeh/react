
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/Login/logo.png'
import { useNavigate } from "react-router-dom";
import wavyLine from '../../assets/svg.png'
import { SiSearxng } from "react-icons/si";
import { useState } from 'react';



const NavBar = () => {
  
    const LogoName = useState("Bubble Nerds")
    const NavList=[
      {
        id:1,
        label:"Home",
        path:"/homePage",

      },
    
      {
        id:2,
        label:"Dashboard",
        path:"/dashboard",

      },
      {
        id:3,
        label:"About",
        path:"/about",

      },
        {
            id: 4,
            label: 'wallet',
            path:'/wallet',

        }

    ]
 
  const navigate2 = useNavigate()

  // function handleSignOut() {
  //   navigate2('/')
  // }

    function handleSignOut(){

        localStorage.removeItem('token')
        navigate2('/');

    };

  return (

    <>

      <div className="nav row mx-0"
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" >

        <div className=' col-4 d-flex justify-content-left align-items-center'>
          <img className='logo_img' src={logo} alt="logo" />
          <div> <h3 className='bubble'>{LogoName}</h3></div>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center">

          <ul >
            {
              NavList.map((e,i)=>{
                return(
                
                <li key={i}>
              <Link to={e.path}  className='li_items'>
                {e.label}
              </Link>
               </li>
                
                
                )})
            }

          </ul>
        </div>
          {/* <div className="col-1 search d-flex justify-content-center align-items-center"> 
            <SiSearxng className='search_icon' />
          <button className='search_btn ' >Search </button> 
          </div> */}

          <div className='col-2 mx-5 d-flex justify-content-center align-items-center'>
            <button className='log_out_btn' onClick={handleSignOut}>Log Out </button>
            </div>
      </div>
      <div><img className='wavyLine ' src={wavyLine} alt="Wavy Line" /></div>





    </>
  );
};

export default NavBar;
