import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.name}</h2>
            </div>
        </div>
    );
};

export default Item;
