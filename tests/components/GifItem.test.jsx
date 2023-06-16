import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem.test pruebas', () => { 
    const titleTest = 'titulo de prueba';
    const urlTest = 'http://mytests.com';

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<GifItem title={ titleTest } url={ urlTest }/>);
        expect( container ).toMatchSnapshot();
     });
 })