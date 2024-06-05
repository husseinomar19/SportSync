'use client';
import Image from "next/image";
import  Header from "../componeten/Header";  
import Footer from "../componeten/Footer";
import google from "../../../public/google.png";
import {auth , provider} from '../../../src/firebase';
import {signInWithPopup} from 'firebase/auth';
import { FormEvent} from 'react';
import { useRouter } from 'next/navigation';




export default function inlog() {
  //Routing 
  const router = useRouter();
  //Form event handler
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  //Gooegle popup form 
   const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      router.push('/gebruikers'); 
    //  return result.user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return (
    <>
    <Header />
    <div className="home_hero inlog_form">
       <form onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <input type="email"  placeholder="E-mail"/>
        <input type="password"  placeholder="Wachtwoord"/>

        <input type="submit" value="Inloggen" />
        <div className="google">
          <Image src={google} onClick={handleLogin} alt="Google" />
          <a href="">Wachtwoord vergeten?</a>
        </div>
        <a href="maakaccound">Geen account? Sign up</a>

       </form>
    </div>
    <Footer />
    </>
  );
}
