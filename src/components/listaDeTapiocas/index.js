import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { List } from 'grommet';

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
        <List
            pad='medium'
            margin='medium'
            primaryKey='recheio'
            secondaryKey='preco'
            data={tapiocas}
        />
    );
}

export default ListaDeTapiocas;