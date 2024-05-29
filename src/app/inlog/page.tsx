import Image from "next/image";
import  Header from "../componeten/Header";  
import Footer from "../componeten/Footer";
import google from "../../../public/google.png";


export default function inlog() {
  return (
    <>
    <Header />
    <div className="home_hero inlog_form">
       <form>
        <h2>Log in</h2>

        <input type="email"  placeholder="E-mail"/>
        <input type="password"  placeholder="Wachtwoord"/>

        <input type="submit" value="Inloggen" />
        <div className="google">
          <a href=""><Image src={google} alt="Google" /></a>
          <a href="">Wachtwoord vergeten?</a>
        </div>
        <a href="maakAccound">Geen account? Sign up</a>

       </form>
    </div>
    <Footer />
    </>
  );
}
