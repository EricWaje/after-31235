import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);
    //console.log('Valores del contexto', prueba);
    //console.log('Cart', prueba.cart);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    };

    /* const persona = {
        nombre: 'eric',
        edad: 27
    } */
    //const otraPersona = {...persona, ciudad: 'Buenos Aires'} -> nombre: 'Eric, edad: 27

    return (
        <div className="detail">
            <img src={item.img} alt={item.name} />
            <div className="info">
                <h2>{item.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nulla voluptas consequuntur aut quia fugit cumque
                    aperiam, corporis voluptate repudiandae ducimus qui, beatae
                    architecto culpa dolore nemo illum, enim iste?
                </p>
                <h4>#{item.category}</h4>
                <h3>$ {item.price}.-</h3>
                {cantidad === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

/* 
const suma = (a,b) =>{
    return a+ b

}

suma(2,3)
*/
