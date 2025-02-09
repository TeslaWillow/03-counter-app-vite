describe('Pruebas en <DemoComponent>', () => {
    test("Esta prueba no debe de fallar", () => {
        // 1. Initialization
        const msg = "Hello world"
    
        // 2. Act / estimulation
        const msg2 = msg.trim();
    
        // 3. see behavior
        expect( msg ).toBe( msg2 );
    });
});
