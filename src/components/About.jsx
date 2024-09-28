/**********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Quién soy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Mi nombre es José.</h4>
            <p>
            Soy un desarrollador web radicado en la hermosa lima norte del Perú,
            Lima.
            </p>
            <p>
            Soy un desarrollador Full Stack con experiencia en diversas tecnologías y frameworks. He trabajado en proyectos que van desde aplicaciones de comercio electrónico hasta sistemas de gestión empresarial. Mi objetivo es siempre entregar productos de alta calidad que superen las expectativas de los clientes.
            </p>
          </div>
          <div className="title">
            <h3>Sobre Mí</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Soy programador web.</h4>
            <p>
              Soy un desarrollador Full Stack con experiencia en diversas tecnologías y frameworks. He trabajado en proyectos que van desde aplicaciones de comercio electrónico hasta sistemas de gestión empresarial. Mi objetivo es siempre entregar productos de alta calidad que superen las expectativas de los clientes.
            </p>
            <div>
            - **Backend**: Java Spring JPA, Microservicios en Spring, PHP (Laravel, CodeIgniter)
            </div>
            <div>
            - **Frontend**: JavaScript (Vue, Angular, React, JQuery, Node.js), Dart (Flutter)
            </div>
            <div>
            - **Bases de Datos**: MySQL, SQL Server, PostgreSQL, ORACLE, MongoDB
            </div>
            <div>
            - **Infraestructura**: AWS, Azure
            </div>
            <div>
            - **Diseño Web**: HTML5, CSS, SCSS
            </div>
            <div>
            - **Herramientas de Gestión**: Jira, Trello
            </div>
            <div>
            - **Control de Versiones**: Git (GitHub, Bitbucket)
            </div>
          </div>
          {/* <div className="desc">
            <h4 className="subtitle">Also a designer.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
              Lightroom or Xd are some kind of industry standards and I love working with them. I'm
              not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
              that I've been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I mentioned, creating
              pretty things is particularly important for me.
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
};
export default About;