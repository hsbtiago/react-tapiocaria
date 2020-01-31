import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const ListaDeTapiocas = ({ tapiocas }) => (

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
    
);

export default ListaDeTapiocas;