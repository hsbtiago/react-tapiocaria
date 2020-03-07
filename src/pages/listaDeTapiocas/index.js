import React, { useState, useEffect } from 'react';
import { Box, TextInput, Button, Footer, Heading } from 'grommet';
import { Link } from 'react-router-dom';
import { Add, Cafeteria } from 'grommet-icons';
import api from '../../services/api';
import './styles.css';

function ListaDeTapiocas() {

    const [tapiocas, setTapiocas] = useState([]);
    const [tapiocasFiltradas, setTapiocasFiltradas] = useState([]);
    const [loading, setLoading] = useState('Carregando Tapiocas...');

    function converterParaReal(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }


    function FiltrarLista(e) {
        const filtro = e.target.value;
        setTapiocasFiltradas(tapiocas.filter(t => t.recheio.toLowerCase().includes(filtro)));
    }

    function FormatarTapioca(tapioca) {
        return {
            recheio: `Tapioca de ${tapioca.recheio}`,
            preco: converterParaReal(tapioca.preco),
            id: tapioca.id
        }
    }

    async function BuscarTapiocas() {

        const response = await api.get('/tapiocas');

        const listaFormatada = response.data.map(FormatarTapioca);

        setTapiocas(listaFormatada);
        setTapiocasFiltradas(listaFormatada);
        setLoading('');
    }

    useEffect(() => { BuscarTapiocas() }, []);

    return (
        <>
            <Heading level='2'>
                <Cafeteria />
                Cardápio de Tapiocas
            </Heading>


            <TextInput placeholder='Pesquisar' onChange={FiltrarLista} />

            <span> {loading} </span>

            <div className="list">
                {
                    tapiocasFiltradas.map(tapioca => (
                        <Link key={tapioca.id} to={`/tapiocas/editar/${tapioca.id}`} className='list-item'>
                            <div> {tapioca.recheio} </div>
                            <div className='texto-secundario'> {tapioca.preco}</div>
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