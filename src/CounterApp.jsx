import PropTypes from "prop-types";
import { useEffect } from "react";

export const CounterApp = ({value}) => {
    useEffect(() => { // Necesary if want to use legacy  > react 18 proptypes
        PropTypes.checkPropTypes(CounterApp.propTypes, { value }, 'prop', 'FirstApp');
    }, [value]);

    return (
        <>
         <h1>CounterApp</h1>
         <h2> { value } </h2>
        </>
    )
  }
  
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
