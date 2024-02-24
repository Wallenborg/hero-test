import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="heads">
          <p className="head" style={{ marginTop: "20px" }}>
          Collaborators
          </p>

          <a
            className="link head"
            href="https://hyperisland.com/"
            target="_blank"
          >
            HYPER ISLAND
          </a>
        </div>
        <div className="headSect2">
          <div className="names">
            <div className="first2">
              <p>Niklas Wallenborg</p>
              <p>Setayesh Nouri</p>
              <p>Maria Nordqvist</p>
            </div>
            <div className="last2">
              <p>Hifza Batool</p>
              <p>Samuel Abraham</p>
            </div>{" "}
          </div>
          <p className="hyper">Virkesvägen 2, 120 30</p>
        </div>
        <div className="hyper2" >
          <a className="link2" href="https://hyperisland.com/" target="_blank">
            HYPER ISLAND
          </a>
          <p>Virkesvägen 2, 120 30</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
