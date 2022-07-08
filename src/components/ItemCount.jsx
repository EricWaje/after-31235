import React from 'react';

const ItemCount = ({ stock, initial }) => {
    return (
        <div className="counter">
            <div className="counter-btn">
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>

            <div>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default ItemCount;
