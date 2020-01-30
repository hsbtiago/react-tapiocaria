import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Box, Button, Paragraph } from 'grommet';
import { Add } from 'grommet-icons';
import { Link } from 'react-router-dom';
import './styles.css';


function ListaDeTapiocas() {

    const [tapiocas, setTapiocas] = useState([]);
    const [loading, setLoading] = useState('Carregando Tapiocas...');

    useEffect(() => {

        async function BuscarTapiocas() {

            const response = await api.get('/tapiocas');

            const listaFormatada = response.data.map(a => {

                return {
                    recheio: `Tapioca de ${a.recheio}`,
                    preco: `R$ ${a.preco}`,
                    id: a.id
                }
            });

            setTapiocas(listaFormatada);
            setLoading('');
        }

        BuscarTapiocas();

    }, []);

    return (
        <>
            <Box pad='medium'>

                <Link to='/tapiocas/criar'>
                    <Button
                        icon={<Add />}
                        label="Adicionar Tapioca"
                        primary={true}
                    />
                </Link>

            </Box>

            <Paragraph>
                {loading}
            </Paragraph>

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

        </>
    );
}

export default ListaDeTapiocas;