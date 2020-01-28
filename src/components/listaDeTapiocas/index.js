import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { List, Box, Button, Paragraph } from 'grommet';
import { Add } from 'grommet-icons';
import { Link } from 'react-router-dom';


function ListaDeTapiocas() {

    const [tapiocas, setTapiocas] = useState([]);
    const [loading, setLoading] = useState(['Carregando...']);

    useEffect(() => {

        async function BuscarTapiocas() {

            const response = await api.get('/tapiocas');

            const listaFormatada = response.data.map(a => {
                return {
                    recheio: `Tapioca de ${a.recheio}`,
                    preco: `R$ ${a.preco}`
                }
            });

            setTapiocas(listaFormatada);
            setLoading('');
        }

        BuscarTapiocas();

    }, []);

    return (
        <>
            <Box>

                <Link to='/tapiocas/criar'>
                    <Button
                        icon={<Add />}
                        label="Adicionar Nova Tapioca"
                        primary={true}
                    />
                </Link>

            </Box>

            <Paragraph>
                {loading}
            </Paragraph>

            <List
                pad='medium'
                margin='medium'
                primaryKey='recheio'
                secondaryKey='preco'
                data={tapiocas}
            />

        </>
    );
}

export default ListaDeTapiocas;