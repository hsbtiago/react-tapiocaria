import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';

const FormTapioca = () => (

    <>
        <Heading>
            <Link to='/'>
                <Button
                    icon={<FormPreviousLink />}
                />
            </Link>
            Criar Tapioca
    </Heading>
        <h1>Formulário de tapioca</h1>
    </>

);

export default FormTapioca;
