import { useState } from 'react';

// Functional Component para agregar una categoria
// Se recupera el propTypes setCategories
export const AddCategory = ({ onNewCategory }) => {

    // Inicializa el estado a vacio
    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => {
        // El campo de texto asume el nuevo valor tecleado
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // Evitar que se recarge la pagina
        event.preventDefault();

        // Validacion para no agregar vacios
        if(inputValue.trim().length <= 1 ) return;

        // Se mantiene los valores actuales del arreglo, se agrega al inicio el nuevo valor capturado en el Input
        // setCategories((categories) => [inputValue, ... categories]);

        onNewCategory(inputValue.trim()); // Por que se llama a un onNewCategory

        // Limpia el inputValue
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>

    )
}
