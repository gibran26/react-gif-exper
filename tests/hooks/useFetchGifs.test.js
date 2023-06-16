const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")

describe('Pruebas de useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('Mortal Kombat') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

     test('Debe retornar un arreglo con imagenes y el isLoading en false', async () => { 

        const { result } = renderHook( () => useFetchGifs('Mortal Kombat') );

        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;


        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

      });

 })