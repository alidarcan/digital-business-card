export default function Info() {
  return (
    <section id="info">
      <div className="container-fluid">
        <div className="row">
          <img className="p-0" src="images/image.png" alt="profile" />
        </div>
        <div className="row">
          <h1>Laura Smith</h1>
          <p className="info--title">Frontend Developer</p>
          <p className="info--website">laurasmith.website</p>
        </div>
        <div className="row info--button-row">
            <a href="#" className="info--btn info--button-email"><i className="fa-solid fa-envelope"></i>Email</a>
            <a href="#" className="info--btn info--button-linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
