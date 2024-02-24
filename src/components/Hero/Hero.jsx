import "./Hero.css";
import reactLogo from "../../img/react.svg";

function Hero() {
  return (
    <div
      className="container-hero"
      aria-label="Hero section title with React logo"
    >
      <h2 className="logo-text--top">THE</h2>
      <h1 className="logo-text">
        REACT
        <img
          src={reactLogo}
          className="logo-icon"
          alt="React logo as the letter o"
          role="img"
        />
        R
      </h1>
      <div className="container-sub-titles">
        <p className="sub-title-left">Stay Current with the Updates</p>
        <p className="sub-title-right">Dive into Exciting React Features</p>
      </div>
    </div>
  );
}

export default Hero;
