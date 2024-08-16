import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import man from '../../assets/home/man.png'
import { useState } from 'react';



function HomePage() {
    const [subs2]=useState(" Bubble Nerds, Where education meets innovation. Our platform allows educators to easily upload and share their expertise, creating a rich repository of courses that students can access and enjoy at their own pace. Dive into a world of knowledge with our easy-to-use system designed to enhance learning through flexibility and accessibility. Whether you're teaching or learning, Bubble Nerds is your partner in achieving educational success")
    const [subTitle]=useState("Welcome back to")
    const [subTitle1]=useState("Bubble Nerds")
    return (<>

    <NavBar/>
    <Header subTitle={subTitle} subTitle1={subTitle1} subs2={subs2} man={man}/>

    </>);
}
 
export default HomePage;