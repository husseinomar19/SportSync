import "../julian.css";
export default function Footer() {
    return (
        <>
            <div>
              <div className="main-footer">
                    <div className="top-footer">
                        <div className="top-left-footer">
                            <h1 className="footer-title">SPORTSYNC</h1>
                        </div>
                        <div className="top-right-footer">
                            <ul className="footer-nav">
                            <li>support</li>
                            <li>privacy</li>
                            <li>cookie</li>
                            <li>ervaringen</li></ul>
                      </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="bottom-left-footer">
                            <div></div>
                            <div className="corner"></div>
                        </div>
                        <div className="bottom-right-footer">
                            <p className="copyright">© SPORTSYNC. 2024, All rights reserved</p>
                        </div>
                 </div>
                </div>
            </div>
        </>
    );
}
