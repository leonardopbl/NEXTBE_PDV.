import React from "react";


function ProductRow(props) {

    return (
        <div className="w-full mt-8 flex flex-row justify-between">
            <h2>Coca-cola</h2>
            <h2>{props.quantity}xUN</h2>
            <h2>R$ {props.price}</h2>
        </div>
    )
}

export default ProductRow;