import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router'
import { Button, Heading, Form, FormField, Box, TextInput } from 'grommet';
import { FormPreviousLink, Save, Add } from 'grommet-icons';
import api from '../../services/api';

function FormTapioca() {

    const { id } = useParams()
    const [recheio, setRecheio] = useState('');
    const [preco, setPreco] = useState('');
    const [redirect, setRedirect] = useState('');

    async function BuscarTapioca() {

        if (id) {
            let response = await api.get('/tapiocas/' + id);
            let tapioca = response.data;

            setRecheio(tapioca.recheio);
            setPreco(tapioca.preco);
        }
    }

    async function SalvarTapioca(e) {

        e.preventDefault();

        let tapioca = { id, recheio, preco };

        if (id) {
            await api.put('/tapiocas/' + id, tapioca);
        }
        else {
            await api.post('/tapiocas', tapioca);
        }


        setRedirect('/');
    }

    useEffect(() => { BuscarTapioca() }, []);

    if (redirect) {
        return (<Redirect to={redirect} />)
    }

    return (
        <>
            <Heading level='3' pad='medium'>
                <Add /> Adicionar Tapioca
            </Heading>

            <Form onSubmit={SalvarTapioca}>

                <Box gap='medium'>

                    <FormField label="Recheio" >
                        <TextInput required value={recheio} onChange={e => setRecheio(e.target.value)} />
                    </FormField>

                    <FormField label="Preço" >
                        <TextInput required value={preco} onChange={e => setPreco(e.target.value)} />
                    </FormField>

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

