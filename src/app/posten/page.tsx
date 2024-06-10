import Image from "next/image";
import Header from "../componeten/Header";
import Footer from "../componeten/Footer";

import "../globals.css";
import "../julian.css";


export default function Home() {
  return (
    <>
    <Header />
    <div className="maincontainer">
        <div className="innercontainer">
            <div className="top-container-post">
            <a href="/"> <img src="/pijl.png" alt="pijl" className="arrow-left"/></a>
            <h1 className="Bericht-maken"> Bericht maken</h1>
            </div>
            
            <div className="between-bar"></div>
            <div className="midle-container-post">
                <div className="midle-inercontainer-left">
            
                <img src="/usericon.png" alt="usericon" className="usericon"/>
                <p className="name-user-post">Emma Johnson</p>   
                </div>
                <div className="plaatsen">
                <p className="plaatsen-text">plaatsen</p>   

                </div>
            </div>
            <div className="between-bar"></div>
            <div className="bottom-container-post">
            <img src="/add-file.png" alt="add-file" className="add-file"/>
            <p className="photo-post-text">foto</p>   
            </div>
        </div>

    </div>


    <Footer />
    </>
  );
}
