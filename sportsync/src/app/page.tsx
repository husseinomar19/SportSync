import Image from "next/image";
import Header from "./componeten/Header";
import Footer from "./componeten/Footer";

import "./globals.css";
import "./julian.css";
export default function Home() {
  return (
    <>
    <Header />


    <div className="home_hero">
        <div className="home_info">
          <img src="/logonaam.png" alt="logo naam" />
          <h2>
          ONTDEK, VERBIND EN GROEI SAMEN MET ONZE LEVENDIGE SPORTGEMEENSCHAP.
          </h2>
          <p>Word lid van onze bruisende sportgemeenschap en ontdek nieuwe verbindingen en kansen. Samen inspireren we elkaar om grenzen te verleggen en nieuwe hoogten te bereiken voor een sterker en gezonder leven.</p>
          <div className="ontdekmeer">
            <p>ontdek meer</p>
            <img src="/pijl.png" alt="ontdekmeer" />
          </div>
        </div>
    </div>
    <Footer />
    </>
  );
}
