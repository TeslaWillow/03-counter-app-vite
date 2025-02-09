import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * const handleAdd = (event) => { 
    console.log(event); 
}
 *  */ // Dont asign more space in memory if this is outside of func component.

export const CounterApp = ({value}) => {

    console.log("IM RENDER!");

    useEffect(() => { // Necesary if want to use legacy  > react 18 proptypes
        PropTypes.checkPropTypes(CounterApp.propTypes, { value }, 'prop', 'FirstApp');
    }, [value]);

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => { 
        // console.log(event)
        setCounter(counter + 1);
        // OR
        // setCounter((c) => c + 1);
    } // state updated ultil function ends

    const handleSubstract = () => setCounter((c) => c - 1);

    const resetCounter = () => setCounter(value);

    return (
        <>
         <h1>CounterApp</h1>
         <h2> { counter } </h2>

         <button onClick={handleAdd} >+1</button>
         <button onClick={handleSubstract}>-1</button>
         <button onClick={resetCounter}>Reset</button>
        </>
    )
  }
  
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
