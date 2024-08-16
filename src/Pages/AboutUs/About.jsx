import NavBar from "../../components/NavBar/NavBar";
import './About.css'
import girl from '../../assets/about/girl.png'



const About = () => {
    return ( 
    <>
    <NavBar/>

    <div className="row mx-0 ">  

    <div className=" mx-4 mt-1 col-3 cardAbout "> 
            <img style={
            {width:'90%'} } src={girl} alt="" /> 
            <h6 className="mt-5 mx-4"> At Bubble Nerds, we are passionate about transforming the educational experience through innovative technology. Our mission is to empower learners and educators by providing a cutting-edge, user-friendly platform that enhances the way people learn and teach.</h6></div>


        <div className=" box mx-4 col-8 mt-0"> 

                <h4>- Our Vision</h4>
                We envision a world where education is accessible, engaging, and tailored to the needs of every learner. By leveraging the latest in educational technology, we strive to create a dynamic and inclusive learning environment that caters to diverse learning styles and needs.
                <h4>- What We Do?</h4>
                Seamless Learning Experience: Bubble Nerds offers a comprehensive suite of tools designed to make online learning intuitive and effective. From interactive courses and assessments to collaborative features and real-time feedback, we’ve got you covered.
                <h4>- Customizable Solutions:</h4>
                 Whether you’re a small business, an educational institution, or a large corporation, our platform can be tailored to meet your specific educational needs and goals.
                <h4>- Support and Training:</h4>
                 We provide extensive support and training resources to help you get the most out of our platform and achieve your learning objectives with confidence.
                <h4>- Our Commitment:</h4>
                We are committed to continuous improvement and innovation, ensuring our platform evolves to meet the ever-changing demands of the educational landscape. Your success is our top priority, and we aim to provide solutions that help you reach your learning goals efficiently and effectively.
                <h4>- Meet the Team</h4>
                Our team is a dynamic group of educators, tech enthusiasts, and developers dedicated to revolutionizing education through technology. Discover more about the people behind Bubble Nerds and their commitment to enhancing the learning experience.

                <h5 className="mt-2">Thank you for choosing Bubble Nerds. We’re excited to be part of your educational journey!</h5>
    

                </div>   
        
               
    </div>

    </>
     );
}
 
export default About;