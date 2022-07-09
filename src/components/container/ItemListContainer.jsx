import React, { useState } from 'react';
import { useEffect } from 'react';
import { products } from '../../mock/products';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });
        traerProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });

        //console.log('primero');
        //llamado a una API
    }, []);

    //console.log(items);

    //console.log('segundo');

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
