import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <>
      <br />
      <br />
      <br />
      <h2 className="text-center">Habitaciones del hotel</h2>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg w-100 fixed-top" style={{ backgroundColor: "#8A0303" }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Hotel LePark</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Reservas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-5 pt-5">
        <div 
          id="carouselExample" 
          className="carousel slide mx-auto p-3"
          data-bs-ride="carousel"
          style={{
            maxWidth: "700px",
            border: "5px solid black",
            borderRadius: "10px",
            backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-dark.png)",
            backgroundColor: "#f4f4f4",
            padding: "15px"
          }}
        >
          <div className="carousel-inner">
            {/* Primera imagen */}
            <div className="carousel-item active text-center" data-bs-interval="2000">
              <img 
                src="https://previews.123rf.com/images/krsmanovic/krsmanovic1108/krsmanovic110800045/10407279-interior-de-una-habitaci%C3%B3n-de-hotel-para-una-persona.jpg" 
                className="d-block w-100" 
                style={{ height: "350px", width: "100%", objectFit: "cover" }} 
                alt="Habitación para 1 persona" 
              />
              <p className="mt-3 text-center" style={{ fontSize: "20px", fontWeight: "bold", color: "#333", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                🌟 Habitación para 1 persona 🌟
              </p>
            </div>

            {/* Segunda imagen */}
            <div className="carousel-item text-center" data-bs-interval="2000">
              <img 
                src="https://previews.123rf.com/images/krsmanovic/krsmanovic1505/krsmanovic150500061/39697830-interior-de-una-habitaci%C3%B3n-de-hotel-para-dos-personas-dise%C3%B1o-de-lujo-moderno.jpg" 
                className="d-block w-100" 
                style={{ height: "350px", width: "100%", objectFit: "cover" }} 
                alt="Habitación para 2 personas" 
              />
              <p className="mt-3 text-center" style={{ fontSize: "20px", fontWeight: "bold", color: "#333", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                🌟 Habitación para 2 personas 🌟
              </p>
            </div>

            {/* Tercera imagen */}
            <div className="carousel-item text-center" data-bs-interval="2000">
              <img 
                src="https://ceramic-paris-hotel.com/_novaimg/galleria/1463904.jpg" 
                className="d-block w-100" 
                style={{ height: "350px", width: "100%", objectFit: "cover" }} 
                alt="Habitación para 3 personas" 
              />
              <p className="mt-3 text-center" style={{ fontSize: "20px", fontWeight: "bold", color: "#333", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                🌟 Habitación para 3 personas 🌟
              </p>
            </div>

            {/* Cuarta imagen */}
            <div className="carousel-item text-center" data-bs-interval="2000">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1U4LmBGinIFPD9ITIGBYAkDgoIqiFG4rSzw&s" 
                className="d-block w-100" 
                style={{ height: "350px", width: "100%", objectFit: "cover" }} 
                alt="Habitación para 4 personas" 
              />
              <p className="mt-3 text-center" style={{ fontSize: "20px", fontWeight: "bold", color: "#333", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                🌟 Habitación para 4 personas 🌟
              </p>
            </div>

            {/* Quinta imagen */}
            <div className="carousel-item text-center" data-bs-interval="2000">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50ss84lHb6NGYV59K2N00jsTXxnZU-615xQ&s" 
                className="d-block w-100" 
                style={{ height: "350px", width: "100%", objectFit: "cover" }} 
                alt="Habitación para 5 personas" 
              />
              <p className="mt-3 text-center" style={{ fontSize: "20px", fontWeight: "bold", color: "#333", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                🌟 Habitación para 5 personas 🌟
              </p>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
        <br />
        <br />
      </main>
    </>
  );
}
