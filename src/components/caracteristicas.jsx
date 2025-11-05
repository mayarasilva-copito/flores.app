import "./caracteristicas.css";
function Caracteristicas() {
  return (
    <>
      <div className="caracteristicas">
        <h2>Caracteristicas</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Colores variados 🌸</h2>
          <p className="flores">
            → Las flores se presentan en una gran diversidad de colores que
            alegran y embellecen la naturaleza.
          </p>
          <img
            src="https://previews.123rf.com/images/mochipet/mochipet1405/mochipet140500001/29256237-vector-illustration-set-of-flowers-of-different-colors.jpg"
            alt="flores de diferentes colores "
          />
        </div>
        <div className="card">
          <h2>Atraen a los polinizadores 🐝🦋</h2>
          <p>
            → Gracias a su néctar y aroma, las flores atraen abejas, mariposas y
            otros animales que ayudan a la polinización.
          </p>
          <img
            src="https://media.istockphoto.com/id/179335251/es/foto/mariposa-y-abeja.jpg?s=612x612&w=0&k=20&c=voCM8x_wUF63QmdzfIup9IMZ7v_hUqpX4SKswWuvQkg="
            alt="mariposa y abejita"
          />
        </div>
        <div className="card">
          <h2>Forman frutos y semillas 🍓🌻 </h2>
          <p>
            → Muchas flores dan origen a los frutos que consumimos y a las
            semillas que permiten nuevas plantas.
          </p>
          <img
            src="https://img.freepik.com/fotos-premium/hermosa-rama-manzano-flores-frutas-rodajas-ilustracion-acuarela_636828-95.jpg"
            alt="fruto"
          />
        </div>
      </div>
    </>
  );
}
export default Caracteristicas;
