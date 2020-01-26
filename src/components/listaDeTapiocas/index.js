import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { List, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';
import { Link } from 'react-router-dom';


function ListaDeTapiocas() {

    const [tapiocas, setTapiocas] = useState([]);

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
        }

        BuscarTapiocas();

    }, []);

    return (
        <>
            <List
                pad='medium'
                margin='medium'
                primaryKey='recheio'
                secondaryKey='preco'
                data={tapiocas}
            />

            <Box>
                <Link to='/'> Voltar</Link>
                <Link to='/tapiocas/criar'> Adicionar Tapioca</Link>
                <Button
                    icon={<Add />}
                    label="Adicionar Nova Tapioca"
                    primary={true}
                    onClick={() => { }}
                />
            </Box>
        </>
    );
}

export default ListaDeTapiocas;