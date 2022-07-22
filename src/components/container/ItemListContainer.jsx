import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            const prodFiltrados = products.filter(
                (prod) => prod.category === categoryId
            );
            setTimeout(() => {
                categoryId ? res(prodFiltrados) : res(products);
            }, 500);
        });
        traerProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
