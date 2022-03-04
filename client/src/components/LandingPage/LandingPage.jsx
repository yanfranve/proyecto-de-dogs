import { Link } from "react-router-dom";
var home = require("./LandingPage.module.css");

export default function Home() {
  //Me lleva hacia home
  return (
    <div className={home.container}>
      <img
        src="https://relativobranding.com/pi/dog.png"
        className={home.item1}
        width="600px"
        height="500px"
      />
      <div className={home.item2}>
        <div className={home.tilte}>
          <h1>PI DE DOGS</h1>
        </div>
        <Link to="/dogs">
          <img
            src="https://relativobranding.com/pi/logo_guau.png"
            height="260px"
          />
          <h2 className={home.tilte2}>INGRESAR</h2>
        </Link>
        {/* <Link to="/dogs">
          <button type="button" className={home.button}>
            Ingresar
          </button>
        </Link> */}
      </div>
    </div>
  );
}
