import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas de getGifs', () => { 
    test('Debe retornar un arreglo de gifs', async () => { 

        const result = await getGifs('zelda');
        expect( result.length ).toBeGreaterThan(0);
        expect( result[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
     })
 })