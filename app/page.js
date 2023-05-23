import "../Styles/landing.css";

export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-wrapper">
        <div className=" landing-left paddings innerWidth flexCenter ">
          <div className="flexColStart hero-title">
            <div className="title-blob"></div>
            <h1 className="landing-title-slogan">
              <span className="response-title">
                Discover Unknown<br></br> Tunes And{" "}
              </span>{" "}
              <br></br>Never Be <br></br>
              Bored Again!
            </h1>
            <div className="flexColStart secondaryText flexhero-des">
              Grab your favorate QR scanner app and scan the code.
            </div>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <span>1000</span>
                <span> +</span>
              </span>
              <span className="secondaryText">Users</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <span>1000</span>
                <span> +</span>
              </span>
              <span className="secondaryText">QR</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <span>1000</span>
                <span> +</span>
              </span>
              <span className="secondaryText">Songs</span>
            </div>
          </div>
        </div>
        <div className=" flexCenter landing-right">
          <div className="image-container">
            <img className="img-landing" src="/landing.svg" alt="earphones" />
          </div>
        </div>
      </div>
    </main>
  );
}
