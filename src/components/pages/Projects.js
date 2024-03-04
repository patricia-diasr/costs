import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Projects.module.css';
import Message from '../layout/Message';
import LinkButton from  '../layout/LinkButton';
import Container from '../layout/Container';
import ProjectCard from '../project/ProjectCard';

function Projects () {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then( resp => resp.json() )
        .then ( data => setProjects(data) )
        .catch( err => console.log(err) );
    }, []);


    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    return (
        <section className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newProject' text='Criar Projeto'/>
            </div>
            { message && <Message msg={message} type="success"></Message> }
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))
                }
            </Container>
        </section>
    );
}

export default Projects;