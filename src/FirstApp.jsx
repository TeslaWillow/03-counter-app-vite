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

export const FirstApp = () => { // Functional component
  return (
    <> {/* Or we can use FRAGMENT of React */}
        <h1>{ getMessage() } ({getSum(2,3)})</h1>
        <code>{ JSON.stringify(newMessage) }</code> {/* Could not be an object */}
        <p>Soy un subtitulo ({ newMessage.age })</p>
    </>
  )
}
