import PropTypes from "prop-types";
import { useEffect } from "react";

/**
 * const handleAdd = (event) => { 
    console.log(event); 
}
 *  */ // Dont asign more space in memory if this is outside of func component.

export const CounterApp = ({value}) => {
    useEffect(() => { // Necesary if want to use legacy  > react 18 proptypes
        PropTypes.checkPropTypes(CounterApp.propTypes, { value }, 'prop', 'FirstApp');
    }, [value]);

    const handleAdd = () => { 
        console.log("+1");
        value = 1000;
    }

    return (
        <>
         <h1>CounterApp</h1>
         <h2> { value } </h2>

         <button onClick={handleAdd} >+1</button>
        </>
    )
  }
  
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
