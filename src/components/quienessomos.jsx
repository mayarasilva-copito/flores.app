import "./quienessomos.css";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Quienessomos() {
  const navigate = useNavigate();

  const handleAdoptar = () => {
    navigate("/mascotas");
  };

  return (
    <div className="quienes-container">

      {/* ================= HISTORIA ================= */}
      <section className="historia-ampliada">
  <h2 className="section-title">🐾 Nuestra Historia</h2>
  <div className="historia-contenido">
    <div className="texto-historia">
      <div className="parrafo-historia">
        <p>
          Todo comenzó con un simple acto de amor. Un día, mientras caminábamos juntas,
          encontramos a un perrito herido que necesitaba ayuda. Sin pensarlo, decidimos
          rescatarlo y cuidarlo hasta que se recuperara. Ese momento cambió todo para nosotras.
        </p>
      </div>
      <div className="parrafo-historia">
        <p>
          Desde entonces, <strong>Mayara, Alexandra y Melany</strong> unimos nuestras fuerzas
          y corazones para crear esta página: un espacio donde los animales puedan tener una
          segunda oportunidad y donde las personas encuentren inspiración para adoptar, ayudar
          o aprender más sobre el cuidado responsable.
        </p>
      </div>
      <div className="parrafo-historia">
        <p>
          Con esfuerzo, cariño y muchas historias felices, seguimos creciendo cada día.
          Nuestra meta es construir una comunidad que ame, respete y proteja a los animales. 🐾💖
        </p>
      </div>
    </div>
    <div className="imagenes-historia">
      <img src="./rescate.jpg" alt="Rescate de perrito" />
      <img src="./gatocalle.jpg" alt="Nosotras tres" />
      <img src="./felices.jpg" alt="Animales felices" />
    </div>
  </div>
</section>

      {/* ================= MISION Y VISION ================= */}
      <section id="mision-vision" className="mision-vision-separadas">
        <div className="card-mv">
          <h3>Misión</h3>
          <p>
            Brindar refugio, cuidado y amor a perritos y gatitos en
            situación de calle, trabajando con la comunidad para ofrecerles
            un hogar seguro y lleno de cariño.
          </p>
          <img src="./mision.png" alt="Misión" />
        </div>
        <div className="card-mv">
          <h3>Visión</h3>
          <p>
            Convertirnos en una organización líder en rescate animal,
            logrando que cada mascota tenga un hogar digno y una vida plena,
            mientras inspiramos a la sociedad a ser más consciente y
            compasiva.
          </p>
          <img src="./vvison.png" alt="Visión" />
        </div>
      </section>
      <br />
      <br />
      {/* ================= NUESTRO EQUIPO ================= */}
      <section className="equipo">
        <h2 className="section-title">Nuestro Equipo</h2>
        <div className="grid-equipo">
          <div className="team-card">
            <h4>🐱 Mayara</h4>
            <p><strong>Fundadora y líder del proyecto</strong></p>
            <div className="redes">
              <a href="https://www.instagram.com/mayaramarelysilvaespinoza/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <img src="./maya.png" alt="Mayara" className="foto-miembro" />
            <p>
              “Desde niña recogía gatitos sin saber que ese amor me llevaría tan lejos. Hoy, como fundadora del proyecto, entiendo que cada rescate comienza con un pequeño acto de empatía.”
            </p>
          </div>

          <div className="team-card">
            <h4>🐶 Alexandra</h4>
            <p><strong>Coordinadora de rescates</strong></p>
            <div className="redes">
              <a href="https://www.instagram.com/shin_vvw/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <img src="./ale.png" alt="Alexandra" className="foto-miembro" />
            <p>
              “Cada rescate me recuerda que la empatía no se mide por el tamaño del acto, sino por la sinceridad del corazón.” 🐾
            </p>
          </div>

          <div className="team-card">
            <h4>🐾 Melany</h4>
            <p><strong>Cuidadora y entrenadora</strong></p>
            <div className="redes">
              <a href="https://www.instagram.com/melx_tm09/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <img src="./melany.png" alt="Melany" className="foto-miembro" />
            <p>
              “Al cuidar a cada animal rescatado, veo cómo el miedo se convierte en confianza y la tristeza en esperanza.” 🐶💞
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ADOPTAR ================= */}
      <section className="cta-final">
        <h2>¿Quieres ayudar a adoptar?</h2>
        <button onClick={handleAdoptar}>Quiero Adoptar</button>
      </section>

    </div>
  );
}

export default Quienessomos;
