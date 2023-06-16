const { waitFor } = require("@testing-library/react")
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba de <GifExpertApp/>', () => {

    test('Debe mostrar imagenes iniciales', async () => {

        render(<GifExpertApp />);        

        expect(screen.getByText('Cargando...')).toBeTruthy();

        await waitFor( () => {
            expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
        });

        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });

    test('No debe de agregar una categoría repetida', async () => {

        render(<GifExpertApp />);        
        const input = screen.getByRole( 'textbox');
        const form = screen.getByRole( 'form' );

        await waitFor( () => {
            expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
        });

        fireEvent.input( input, { target: { value: 'Naruto' }});
        fireEvent.submit( form );

        expect( screen.getAllByRole( 'heading', { level: 3 }).length ).toBe(1);

        fireEvent.input( input, { target: { value: 'Zelda' }});
        fireEvent.submit( form );

        expect( screen.getAllByRole( 'heading', { level: 3 }).length ).toBe(2);

    });

})