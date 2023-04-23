import React, { useState } from "react";

import "./ProductRow.css";


function ProductRow(props) {

    return (
        <div className="productrow">
            <h2>Coca-cola</h2>
            <h2>{props.quantity}xUN</h2>
            <h2>R$ {props.price}</h2>
        </div>
    )
}

export default ProductRow;