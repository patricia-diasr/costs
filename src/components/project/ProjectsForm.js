import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm ({btnMessage}) {

    const [categories, setCategories] = useState([]);

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
    }, [])

    return (
        <form className={styles.form}>
            <Input 
                type="test"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçanento total"
            />
            <Select 
                text="Selecione a categoria"
                name="category_id"
                options={categories}
            />
            <SubmitButton text={btnMessage} />
        </form>
    );
}

export default ProjectForm;