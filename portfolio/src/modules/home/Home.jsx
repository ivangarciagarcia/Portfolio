import { PersonalCard } from "../../components/personalCard/PersonalCard";
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub   } from 'react-icons/io';
import { IoLogoReact, IoLogoFigma, IoLogoSass  } from "react-icons/io5";
import { SiJavascript, SiTypescript, SiMysql, SiJira } from "react-icons/si";
import { FaInstagram, FaJava, FaLinkedin } from "react-icons/fa6";
import { BiLogoSpringBoot, BiSolidMobileVibration  } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";



import "./home.css";
import { ContactForm } from "../../components/contactForm/ContactForm";
import Experience from "../../components/experience/Experience";
export const Home = () => {

    const iconsRow1 =[<IoLogoHtml5 key={1}/>, <IoLogoCss3 key={2}/>, <SiJavascript key={3}/>, <SiTypescript key={4}/>, <IoLogoReact key={5}/>, <IoLogoSass key={6}/>]
    const iconsRow2 =[<FaJava key={7}/>, <BiLogoSpringBoot key={8}/>, <SiMysql key={9}/>, <SiJira key={10}/>, <IoLogoFigma key={11}/>, <IoLogoGithub key={12}/>]

    const iconsRow3 = [
      {
        key: 13,
        icon: <IoLogoGithub />,
        href: 'https://github.com/ivangarciagarcia', // Reemplaza con tu enlace de GitHub
      },
      {
        key: 14,
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/ivan-garcia-garcia', // Reemplaza con tu enlace de LinkedIn
      },
      {
        key: 15,
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/ivangg._', // Reemplaza con tu enlace de Instagram
      },
    ];
    return(
      <div className="content-wrapper">
        <section className="presentation-container">
            <div className="left-column-1">
                <PersonalCard/>
            </div>

            <div className="right-column-1">
                <h1>Iván García García</h1>
                <h2>Desarrollador Full-Stack💻</h2>
                <p className="subtitulo">Soy un apasionado de la informatica y el desarrolo de Software, actualmente tengo 22 años y estoy trabajando como desarrollador full stack</p>
                <h2>Mis habilidades</h2>
                <div className="habilidades">
                  <p className="habilidades-titulo">✺ Diseño + Desarrollo Frontend</p>
                  <p className="habilidades-subtitulo">Diseños limpios y modernos optimizados para el rendimiento, la accesibilidad y convertir usuarios en clientes</p>
                  <p className="habilidades-titulo">✺ Logica + Desarrollo de Backend</p>
                  <p className="habilidades-subtitulo">Crear lógica de desarrollo de acuerdo a las necesidades del usuario.</p>
                  <p className="habilidades-titulo">✺ Gestion y mantenimiento de bases de datos</p>
                  <p className="habilidades-subtitulo">Entusiasta de la gestión de bases de datos, con enfoque en optimización y administración.</p>
                </div>
            </div>
        </section>
        <Experience/>
        <section className="technologies-container">
        <div className="centered-content">
          <h2 className="titulo-seccion">Tecnologías</h2>
          <p className="subtitulo">Con las que trabajo</p>
          <div className="icons-row">
            {iconsRow1.map((icon) => (
              <div key={icon.key} className="icon">
                {icon}
              </div>
            ))}
          </div>
          <div className="icons-row">
            {iconsRow2.map((icon) => (
              <div key={icon.key} className="icon">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>


        <div className="centered-content">
          <h2 className="titulo-seccion">Contacta conmigo</h2>
          <p className="subtitulo">Contacte completando el formulario y le respondere con la mayor brevedad posible</p>
        </div>

        <section className="contact-container">
        

            <div className="left-column-2">
              <div className="datos-contacto">
                <h3>Informacion del contacto</h3>
                <p className="subtitulo">Tambien puedes contactarme en mis redes sociales</p>
                <p><BiSolidMobileVibration/> +34 697160793 </p>
                <p><FaMailBulk/> garciaivan200@gmail.com </p>
                <div className="icons-row-2">
                  {iconsRow3.map((icon) => (
                    <div key={icon.key} className="icon-2">
                      <a href={icon.href} target="_blank" rel="noopener noreferrer">
                        {icon.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-column-2">
              <ContactForm/>
            </div>


        </section>
      </div>

    );
}