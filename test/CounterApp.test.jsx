import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const value = 100;

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value}/>);
        expect( screen.findByText(value) ).toBeTruthy();

        expect( screen.getByTestId('test-value').innerHTML ).toContain(`${value}`);
    });

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText(`${value+1}`) ).toBeTruthy();
    });

    test('Debe de decrementar con el botón -1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText(`${value-1}`) ).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp value={value}/>);

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // value + 3
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: "btn-reset" }));

        expect( screen.getByText(value) ).toBeTruthy();
    });
});