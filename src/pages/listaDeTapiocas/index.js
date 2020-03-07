import React, { useState, useEffect } from 'react';
import { Box, TextInput, Button, Footer } from 'grommet';
import { Link } from 'react-router-dom';
import { Add } from 'grommet-icons';
import api from '../../services/api';
import './styles.css';

function ListaDeTapiocas() {

    const [filtro, setFiltro] = useState('');
    const [tapiocas, setTapiocas] = useState([]);
    const [loading, setLoading] = useState('Carregando Tapiocas...');

    function FiltrarLista(e) {
        setFiltro(e.target.value)
    }

    function FormatarTapioca(tapioca) {
        return {
            recheio: `Tapioca de ${tapioca.recheio}`,
            preco: `R$ ${tapioca.preco}`,
            id: tapioca.id
        }
    }

    async function BuscarTapiocas() {

        const response = await api.get('/tapiocas');

        const listaFormatada = response.data.map(FormatarTapioca);

        setTapiocas(listaFormatada);
        setLoading('');
    }

    useEffect(() => { BuscarTapiocas() }, []);

    return (
        <>
            <Box margin='medium'>
                <TextInput placeholder='Pesquisar' value={filtro} onChange={FiltrarLista} />
                {loading}
            </Box>

            <div className="list">
                {
                    tapiocas.map(tapioca => (
                        <Link key={tapioca.id} to={`/tapiocas/editar/${tapioca.id}`} className='list-item'>
                            <div className='texto-primario'> {tapioca.recheio} </div>
                            <div className='texto-secundaio'> {tapioca.preco} </div>
                        </Link>
                    ))
                }
            </div>


            <Footer background="brand" pad="medium" justify='end'>
                <Link to='/tapiocas/criar'>
                    <Button
                        icon={<Add />}
                        label="Adicionar Tapioca"
                    />
                </Link>
            </Footer>

        </>

    );
}

export default ListaDeTapiocas;