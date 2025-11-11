import "./floreria.css";

function FloreriaSection() {
  return (
    <>
      <section className="mundo-floral-container">
        <div className="text-section">
          <h1>
            "Transforma tu Evento con{" "}
            <span className="highlight">Arreglos Florales Inigualables</span>"
          </h1>

          <p>
            En <strong>Mundo Floral</strong>, contamos con más de 20 años de
            experiencia brindando productos florales de la más alta calidad.
            Nuestra pasión por las flores nos ha permitido consolidarnos como
            una de las florerías más reconocidas de la región.
          </p>

          <p>
            Nos especializamos en ofrecer arreglos frescos y personalizados para
            cualquier ocasión: desde bodas y aniversarios hasta eventos
            corporativos y momentos especiales. Cada diseño es elaborado con
            dedicación, creatividad y amor por la naturaleza.
          </p>

          <p>
            En <strong>Mundo Floral</strong>, creemos que cada flor cuenta una
            historia. Por eso, trabajamos día a día para ofrecer belleza, color
            y armonía en cada arreglo, garantizando la satisfacción total de
            nuestros clientes.
          </p>
        </div>

        {/* Aquí solo el div para la imagen con fondo CSS */}
        <div className="image-section">
          <img
            src="https://www.donregalo.pe/app/publicroot/imgs/files/medium/1753480140ramodegraduacion.jpg"
            alt="imagen"
          />
        </div>
      </section>
    </>
  );
}
export default FloreriaSection;
