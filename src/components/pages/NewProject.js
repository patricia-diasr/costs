import { useNavigate } from 'react-router-dom';

import styles from './NewProjects.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject () {

    const navigate = useNavigate();

    function createProject(project) {
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then( resp => resp.json() )
        .then ( data => {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
        } )
        .catch( err => console.log(err) );
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Crir Projeto</h1>
            <p>Crie o seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createProject} btnMessage="Criar projeto" />
        </div>
    );
}

export default NewProject;