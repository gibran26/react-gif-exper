import { useState } from "react"
import PropTypres from "prop-types";


export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    // Se utiliza para permitir editar el texto
    const onInputChanged = ( {target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <=1 ) return;

        // setCategories( (categories) =>  [ inputValue, ...categories ]);
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChanged}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypres.func.isRequired
}
