import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Heading, Form, FormField, Box } from 'grommet';
import { FormPreviousLink, Save, Add } from 'grommet-icons';
import api from '../../services/api';

function FormTapioca() {

    const [recheio, setRecheio] = useState('');
    const [preco, setPreco] = useState('');
    const [redirect, setRedirect] = useState('');

    async function SalvarTapioca(e) {

        e.preventDefault();

        var tapioca = { recheio, preco };

        await api.post('/tapiocas', tapioca);

        setRedirect('/');
    }

    if (redirect) {
        return (<Redirect to={redirect} />)
    }

    return (
        <>
            <Heading level='3' pad='medium'>
                <Add/> Adicionar Tapioca
            </Heading>

            <Form onSubmit={SalvarTapioca}>

                <Box gap='medium'>

                    <FormField name="recheio" label="Recheio" required value={recheio} onChange={e => setRecheio(e.target.value)} />
                    <FormField name="preco" label="Preço" required value={preco} onChange={e => setPreco(e.target.value)} />

                    <Box direction='row' gap='medium' pad='medium'>

                        <Link to='/'>
                            <Button
                                icon={<FormPreviousLink />}
                                label='Cancelar'
                            />
                        </Link>

                        <Button type="submit" primary label="Salvar" icon={<Save />} />
                    </Box>
                </Box>

            </Form>
        </>
    );
}

export default FormTapioca;
