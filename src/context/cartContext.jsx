// 1. creamos nuestro contexto
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();
//console.log(CartContext);

//2. creamos nuestro componente como capa de abstracción y llamamos a los children para poder visualizar en pantalla nuevamente los componentes

const Provider = (props) => {
    //console.log(props.children);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya está en el carrito');
            //sumo la cantidad
        } else {
            setCart([...cart, { ...item, cantidad }]);
            //lo agrego al carrito
        }
        //console.log({ ...item, cantidad });
        // ... spread

        //console.log('agregando al carrito');
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;
