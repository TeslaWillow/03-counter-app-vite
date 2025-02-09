import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    /**
     * test('Debe hacer match con el snapshot', () => {
        const title = 'Hola, soy hector';
        const {container} = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    });
     */

    test('Debe mostrar el titulo en un h1', () => {
        const title = 'Hola, soy hector';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect( getByText(title) ).toBeTruthy();

        // This is too strict
        // const h1 = container.querySelector("h1");
        // expect(h1.innerHTML).toContain(title); // Diferent because dont care blank spaces

        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy hector';
        const subTitle = 123;
        const {  getAllByText } = render(
            <FirstApp 
                title={title} 
                subTitle={subTitle} 
            />
        );

        expect( getAllByText(subTitle).length ).toBe(2);
    });
 })