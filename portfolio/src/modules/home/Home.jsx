import { PersonalCard } from "../../components/personalCard/PersonalCard";
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub   } from 'react-icons/io';
import { IoLogoReact, IoLogoFigma, IoLogoSass  } from "react-icons/io5";
import { SiJavascript, SiTypescript, SiMysql, SiJira } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";


import "./home.css";
export const Home = () => {

    const iconsRow1 =[<IoLogoHtml5 key={1}/>, <IoLogoCss3 key={2}/>, <SiJavascript key={3}/>, <SiTypescript key={4}/>, <IoLogoReact key={5}/>, <IoLogoSass key={6}/>]
    const iconsRow2 =[<FaJava key={7}/>, <BiLogoSpringBoot key={8}/>, <SiMysql key={9}/>, <SiJira key={10}/>, <IoLogoFigma key={11}/>, <IoLogoGithub key={12}/>]


    return(
      <div >
        <section className="presentation-container">
            <div className="left-column">
                <PersonalCard/>
            </div>

            <div className="right-column">
      
            </div>
        </section>

        <section className="technologies-container">
        <div className="centered-content">
          <h2>Tecnologías</h2>
          <p>Con las que trabajo</p>
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

        <section className="contact-container">
        <div className="centered-content">
          <h2>Contacta conmigo</h2>
          <p>Contacte completando el formulario y le respondere con la mayor brevedad posible</p>
        </div>
            <div className="left-column">
                
            </div>

            <div className="right-column">
      
            </div>
        </section>
      </div>

    );
}