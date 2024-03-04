import styles from './NewProjects.module.css';
import ProjectForm from '../project/ProjectsForm';

function NewProject () {
    return (
        <div className={styles.newproject_container}>
            <h1>Crir Projeto</h1>
            <p>Crie o seu projeto para depois adicionar serviços</p>
            <ProjectForm btnMessage="Criar projeto" />
        </div>
    );
}

export default NewProject;