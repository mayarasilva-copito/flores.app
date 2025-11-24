import './portada.css'
function Portada() {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>“Cada patita merece un hogar lleno de cariño.”</h1>
          <p>
            Detrás de cada mirada hay una historia que pide una segunda oportunidad. Muchos han esperado por tanto tiempo sentir un abrazo, una voz amable, un lugar donde pertenecer.
Tal vez hoy seas tú quien convierta su esperanza en un hogar… y su tristeza en una vida llena de amor.
          </p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <h1 className="heading">
            <span></span>
            Nosotros
          </h1>

          <div className="row">
            <div className="imagen-content">
              <div className="imagenprincipal">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/037/749/711/non_2x/ai-generated-dog-and-cat-on-transparent-background-free-png.png"
                  alt="imagenprincipal"
                />
              </div>

              <div className="seccion-dedicamos">
  <h2>¡A Qué Nos Dedicamos!</h2>
<p>
  Nos dedicamos a trabajar con dedicación para ayudar a perros y gatos que han sido abandonados o que viven 
  en situaciones difíciles. Nuestro equipo y los voluntarios se encargan de rescatarlos, brindarles 
  atención médica, alimentarlos y darles un lugar seguro donde puedan sentirse protegidos.  
  <br /><br />
  Muchos de ellos llegan asustados, enfermos o sin haber conocido nunca el cariño de una familia. 
  Por eso, además de cuidarlos físicamente, también les damos amor, paciencia y un espacio donde puedan 
  recuperarse y volver a confiar.  
  <br /><br />
  Mientras están con nosotros, los preparamos para su nueva vida: los socializamos, los vacunamos y 
  los acompañamos hasta que estén listos para ser adoptados. Cada vez que uno de nuestros peluditos 
  encuentra un hogar, sentimos que es una victoria enorme, porque significa una vida cambiada para siempre.  
  <br /><br />
  Nuestro compromiso es seguir rescatando, ayudando y trabajando para que cada vez más animales tengan 
  la oportunidad de vivir con dignidad, amor y respeto. Creemos en un futuro donde ningún animal sufra 
  abandono y donde cada uno pueda conocer lo que es tener una familia que lo quiera de verdad.
</p>


</div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Portada
