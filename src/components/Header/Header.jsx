import './Header.css'

import { useNavigate } from "react-router-dom";


const Header = ({subTitle,subTitle1,subs2,man}) => {
    
    const navigate3 = useNavigate()
    const navigate4 = useNavigate()
    function moveToAbout() {
        navigate3('/about')
    }
    function moveToDashboard() {
        navigate4('/dashboard')
    }
    return (<>



        <div className="row mx-0  ">
            <div className='col-5 mt-3 d-flex justify-content-center align-items-center'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img className="man" src={man} alt="" />
            </div>
            <div className='col-6 mt-3 mx-1 d-flex justify-content-center align-items-center'>
                <div className='row line'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='head mt-3 '>{subTitle}</div>
                    <div className='head1'> {subTitle1}</div>
                    <div className='subs'>{subs2}</div>
                    <div className='mt-4 mb-4 d-flex justify-content-left align-items-center'>
                        <button className='click_btn' onClick={moveToDashboard} >Dashboard</button>
                        <button className='click_btn' onClick={moveToAbout} >About Us</button>
                        </div>
                </div>
            </div>


        </div>


    </>);
}

export default Header;