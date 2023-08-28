import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Some of my Work</h3>
      <div className={styles.container}>
        <div className={styles.projects}>
          {projects?.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let projects = []
  try {
    projects = await getProjects();

  } catch (error) {
    console.log(`error while getting projects ${error}`)
  }
  return {
    props: { title: 'Projects', projects },
    // revalidate: 60 // will be fetched in every 60 secs
  };
}

export default ProjectsPage;
