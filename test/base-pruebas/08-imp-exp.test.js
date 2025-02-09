import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeBy debe retonar un heroe por Id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeBy debe retonar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    // Tarea:
    test('getHeroesByOwner only bring DC characters ', () => {
        const owner = "DC";
        const heroesDC = getHeroesByOwner(owner);
    
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroesDC).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
    });

    test('getHeroesByOwner only bring Marvel characteres', () => {
        const owner = "Marvel";
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual( heroesMarvel.filter( (heroe) => heroe.owner === owner ) );
    });
});