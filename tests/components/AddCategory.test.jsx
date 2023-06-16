import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas de <AddCategory/>', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole( 'textbox');

        fireEvent.input( input, { target: { value: 'Goku' }});
        expect( input.value ).toBe('Goku');

     });

     test('No se realiza el submit si solo se escribió un caracter', () => { 
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole( 'textbox');

        fireEvent.input( input, { target: { value: 'a' }});
        fireEvent.submit( input );
        expect( input.value ).toBe('a');

     });

     test('Validar el submit', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>);
        const input = screen.getByRole( 'textbox');
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: 'Goku' }});
        // screen.debug();
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( 'Goku' );

     });

     test('No debe llamar onAddCategory si el input está vacío ', () => { 
        const onAddCategory = jest.fn();
        render( <AddCategory onAddCategory = { onAddCategory}/>);
        const form = screen.getByRole( 'form' );

        fireEvent.submit( form );
        expect( onAddCategory ).toHaveBeenCalledTimes(0);
        expect( onAddCategory ).not.toHaveBeenCalled();
      })
 })