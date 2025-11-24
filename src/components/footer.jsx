import './footer.css';

  function Footer() {
  return (
    <>
    <footer className="mi-footer">
  <div className="footer-content">

    <div className="footer-info">
      <h3>Happy Tails</h3>
      <p>Rescatamos, cuidamos y encontramos hogares llenos de amor 🐾</p>
      <p>© 2025 Happy Tails. Todos los derechos reservados.</p>
    </div>

    <div className="footer-links">
      <h4>Enlaces</h4>
      <a href="/inicio">Inicio</a>
      <a href="/mascotas">Mascotas</a>
      <a href="/formulario">Adoptar</a>
      <a href="/nosotros">Nosotros</a>
    </div>

    <div className="social-icons">
      <h4>Síguenos</h4>
      <div>
        <a href="https://facebook.com" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" />
        </a>
        <a href="https://www.instagram.com/happy_tails_dogandcat/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" />
        </a>
      </div>
    </div>

  </div>
</footer>

    </>
  );
  }

export default Footer;
