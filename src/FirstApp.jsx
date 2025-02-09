import PropTypes from 'prop-types';
import { useEffect } from 'react';

const newMessage = {
    message: "Hector",
    title: "Hola",
    age: 28
}; // Still capsulated and faster

const getMessage = () => {
    return `${newMessage.title} ${newMessage.message}`;
}

const getSum = (a, b) => {
    return a + b;
}

export const FirstApp = ({title, subTitle}) => { // Functional component
    useEffect(() => { // Necesary if want to use legacy  > react 18 proptypes
        PropTypes.checkPropTypes(FirstApp.propTypes, { title, subTitle }, 'prop', 'FirstApp');
    }, [title, subTitle]);

  return (
    <> {/* Or we can use FRAGMENT of React */}
        <h3 data-testid="test-title">{ title } </h3>
        <h2>{ getMessage() } ({getSum(2,3)})</h2>
        <code>{ JSON.stringify(newMessage) }</code> {/* Could not be an object */}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>Soy un subtitulo ({ newMessage.age })</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
};

/* 
    // LEGACY
    FirstApp.defaultProps = {
    title: "No hay titulo"
    }
*/