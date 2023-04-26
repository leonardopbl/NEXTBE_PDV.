import React, { useState } from 'react';


import ProductRow from "./ProductRow";

function SearchBar() {
    const [priceValue, setPriceValue] = useState(0)
    const [quantityValue, setQuantityValue] = useState(0)
    const [error, setError] = useState("")


    function handleChange() {

        const price = (parseFloat(quantityValue) + 8.00).toFixed(2)
        setPriceValue(price)
        return priceValue


    }

    function checkValue(event) {

        const checkIsNumber = event.target.value
        try {
            if ((/^\d*$/.test(checkIsNumber))) {

                setQuantityValue(checkIsNumber)
            }
        } catch (error) {
            setError("Digite um número válido!");
        }


    }
    return (
        <div className="searchbar">
            <div className="w-full grid justify-items-stretch text-align shadow-inner shadow-blue-500">
                <input type="text" placeholder="digite a quantidade" onChange={checkValue}></input>
            </div>
            <div className="w-full grid justify-items-stretch shadow-2xl">
                <button type="button" value="Buscar" onClick={handleChange}></button>
            </div>
            <ProductRow price={priceValue} quantity={quantityValue}></ProductRow>
        </div>
    )
}

export default SearchBar;