import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock( '../../src/hooks/useFetchGifs' );


describe('Pruebas de GifGrid', () => { 
    const category = 'Mortal kombat';

    test('Debe mostrar el mensaje de loading al inicio', () => { 
        //Mock del custom hook
        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
     });

     test('Debe mostrar items cuando se cargan las imagenes', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Subzero',
                url: 'http://custom.com'
            },
            {
                id: 'DEF',
                title: 'Scorpion',
                url: 'http://custom.com'
            },
            {
                id: 'GHI',
                title: 'Jax',
                url: 'http://custom.com'
            },
        ]
        //Mock del custom hook
        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(3);
     });
 })