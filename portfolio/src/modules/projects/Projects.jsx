import { ProjectCard } from "../../components/projectCards/ProjectCard"
import { FaGithub } from "react-icons/fa";


export const Projects = () => {

    return(
      <div>
        <ProjectCard
           src={''}
           alt={'GGBowling'}
           title={'GGBowling'}
           description={'Gestor de una bolera'}
           buttonText={<FaGithub/>}
           onClick={null}
        />
      </div>
    );
}