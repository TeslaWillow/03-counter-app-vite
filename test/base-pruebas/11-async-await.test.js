import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retonar un error sin api key', async() => {
        const url = await getImagen();
        expect(url).toBe("No se encontro la imagen");
    });
})