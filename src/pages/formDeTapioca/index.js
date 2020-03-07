import { Button, Heading, Form, FormField, Box, TextInput, Footer } from 'grommet';
import { FormPreviousLink, Save, Add, Trash, Edit } from 'grommet-icons';
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router'
import api from '../../services/api';

function FormTapioca() {

    const { id } = useParams()
    const [recheio, setRecheio] = useState('');
    const [preco, setPreco] = useState('');
    const [redirect, setRedirect] = useState('');
    const title = (id) ? (<span><Edit/> Editar Tapioca</span>) :  (<span><Add/> Adicionar Tapioca</span>);

    async function ExcluirTapioca() {
        await api.delete('/tapiocas/' + id);
        setRedirect('/');
    }

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
            <Box width='large'>

                <Box direction='row'>

                    <Box flex='grow'>
                        <Heading level='2' pad='medium' >
                            {title}
                        </Heading>
                    </Box>

                    <Box justify='center'>
                        <Button
                            primary
                            icon={<Trash />}
                            label='Excluir'
                            color='status-critical'
                            onClick={ExcluirTapioca}
                        />
                    </Box>

                </Box>

                <Form onSubmit={SalvarTapioca}>

                    <Box gap='medium'>

                        <FormField label="Recheio" >
                            <TextInput required value={recheio} onChange={e => setRecheio(e.target.value)} />
                        </FormField>

                        <FormField label="Preço" >
                            <TextInput required value={preco} onChange={e => setPreco(e.target.value)} />
                        </FormField>

                        <Footer background="brand" pad="medium" justify='around'>

                            <Link to='/'>
                                <Button
                                    icon={<FormPreviousLink />}
                                    label='Cancelar'
                                />
                            </Link>

                            <Button type="submit" primary label="Salvar" icon={<Save />} />

                        </Footer>


                    </Box>

                </Form>
            </Box>



        </>
    );
}

export default FormTapioca;

