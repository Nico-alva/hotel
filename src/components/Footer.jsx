import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container" style={{ marginBottom: '100px' }}>
        {/* Aquí va el resto del contenido de la página, como el carrusel */}
      </div>

      <div style={{ backgroundColor: '#D3D3D3', color: 'black', padding: '40px 0', width: '100%' }}>
        <div className="container">
          <div className="row">
            {/* Sección de contacto */}
            <div className="col-md-4">
              <h5>Contacto</h5>
              <p>Email: contacto@lepark.com</p>
              <p>Teléfono: +54 9 381 123 4567</p>
            </div>

            {/* Sección de redes sociales */}
            <div className="col-md-4">
              <h5>Redes Sociales</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="https://www.facebook.com/LeParkHotel" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/LeParkHotel" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com/LeParkHotel" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>

            {/* Sección de ubicación con mapa */}
            <div className="col-md-4">
              <h5>Ubicación</h5>
              <p>Hotel LePark, Calle Ficticia 123, Tucumán, Argentina</p>
              {/* Enlace a Google Maps */}
              <a
                href="https://www.google.com/maps?q=Hotel+LePark,+Calle+Ficticia+123,+Tucumán,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Tucumán,Argentina&zoom=14&size=300x200&markers=color:red%7Clabel:H%7C-26.8199,-65.2176"
                  alt="Ubicación del Hotel en Google Maps"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </a>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>&copy; 2025 Hotel LePark. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
