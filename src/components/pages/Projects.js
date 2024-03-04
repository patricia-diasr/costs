import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';
import Message from '../layout/Message';

function Projects () {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    return (
        <section >
            <h1>Meus projetos</h1>
            { message && <Message msg={message} type="success"></Message> }
        </section>
    );
}

export default Projects;