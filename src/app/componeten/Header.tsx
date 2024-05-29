
export default function Header(){
    return(
        <>
        <header>
            <div className="head">
                <img src="/logoklien.png" alt="logo" />
                <div className="samen">
                <p>Samen sporten, samen groeien!</p>
                <span className="span_een"></span>
                <span className="span_twee"></span>
                </div>
            <ul>
                <li><img src="/tiktok.png" alt="tiktok" /></li>
                <li><img src="/nsta.png" alt="tiktok" /></li>
                <li><img src="/facebook.png" alt="tiktok" /></li>
            </ul>
            </div>

            <div className="head_list">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Activiteiten</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Support</a></li>
                </ul>
                <img src="/logo.png" alt="logo" />

                   <ul>
                    <li><a href="">Log In</a></li>
                    <li><a href="">Sign In </a></li>
                   </ul>
               </div>     
        </header>
        </>
    )
}