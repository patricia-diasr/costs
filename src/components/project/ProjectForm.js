import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm ({handleSubmit, btnMessage, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect( () => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then( resp => resp.json() )
        .then ( data => setCategories(data) )
        .catch( err => console.log(err) );
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project)
    };

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value});
    };

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }});
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="test"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                value={project.name || ''}
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçanento total"
                value={project.budget || ''}
                handleOnChange={handleChange}
            />
            <Select 
                text="Selecione a categoria"
                name="category_id"
                options={categories}
                value={project.category ? project.category.id : ''}
                handleOnChange={handleCategory}
            />
            <SubmitButton text={btnMessage} />
        </form>
    );
}

export default ProjectForm;