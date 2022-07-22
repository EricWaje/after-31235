import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ saludo }) => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const traerProducto = new Promise((res, rej) => {
            const product = products.find((prod) => prod.id === Number(id));
            setTimeout(() => {
                res(product);
            }, 500);
        });
        traerProducto
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="detailContainer">
            <h2>{saludo}</h2>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
