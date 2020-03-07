import { Button, Heading, Form, FormField, Box, TextInput, Footer, Layer, Paragraph } from 'grommet';
import { FormPreviousLink, Save, Add, Trash, Edit, Previous } from 'grommet-icons';
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router'
import api from '../../services/api';

function FormTapioca() {

    const { id } = useParams()
    const [recheio, setRecheio] = useState('');
    const [exibirModalDeExcluir, setExibirModalDeExcluir] = useState(false);
    const [preco, setPreco] = useState('');
    const [redirect, setRedirect] = useState('');
    const title = (id) ? (<span><Edit /> Editar Tapioca</span>) : (<span><Add /> Adicionar Tapioca</span>);

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

            <Box direction='row'>

                <Box flex='grow'>
                    <Heading level='2' pad='medium' >
                        {title}
                    </Heading>
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

            {
                id && (

                    <Box width='small'>
                        <Button
                            icon={<Trash />}
                            label='Excluir'
                            color='status-critical'
                            onClick={() => setExibirModalDeExcluir(true)}
                        />
                    </Box>
                )
            }

            {exibirModalDeExcluir && (
                <Layer 
                    onEsc={() => setExibirModalDeExcluir(false)}
                    onClickOutside={() => setExibirModalDeExcluir(false)}
                >
                    <Box pad='large'>
                        <Heading level='2'>
                            Tem certeza que deseja excluir?
                        </Heading>
                        <Paragraph textAlign='center'>
                            Esta Tapioca não poderá ser recuperada D=
                        </Paragraph>

                        <Box direction='row' justify='between' margin={{ top: '50px;' }}>
                            <Button label="Cancelar" onClick={() => setExibirModalDeExcluir(false)} icon={<FormPreviousLink />} />
                            <Button label="Excluir" onClick={ExcluirTapioca} color='status-critical' primary={true} icon={<Trash />} />
                        </Box>

                    </Box>
                </Layer>
            )}


        </>
    );
}

export default FormTapioca;

