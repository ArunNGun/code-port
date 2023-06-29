import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, index = '-' }) => {
  return (
    <div class={styles.card}>
      <div class={styles.wrapper}>
        <div className={styles.image}>
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src={project.image}
            // height={540}
            // width={500}
            alt={project.name} />
        </div>
        <div class={styles.date}>
          <span class={styles.day}>{project.name}</span>
        </div>
        <ul class={styles.menuContent}>
          <li><a href={project.source_code} target='_blank'><i className="fab fa-github fa-beat-fade"></i></a></li>
          {
            project?.tags?.map(tag => {
              switch (tag) {
                case 'react':
                  return <li><a href="#"><i className={`fab fa-${tag} fa-spin`}></i></a></li>
                default:
                  return <li><a href="#"><i className={`fab fa-${tag}`}></i></a></li>
              }
            }
            )
          }
          <li><a href={project.live_link} target='_blank'><i class="fa-solid fa-arrow-up-right-from-square fa-bounce fa-xs"></i></a></li>
          {/* <li><a href="#"><i class="fab fa-js"></i></a></li> */}
        </ul>
        <div class={styles.data}>
          <div class={styles.content}>
            <span class={styles.type}>{`Project-${index}`}</span>
            <h1 class={styles.title}><a href="#">{project.name}</a></h1>
            <p class={styles.text}>{project.description}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectCard;
