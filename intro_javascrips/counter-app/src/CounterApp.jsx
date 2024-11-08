import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value  }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const menos = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(value); // Inicializa el contador con el valor predeterminado
    };

    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={menos}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
