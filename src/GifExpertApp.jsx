import { useState } from 'react';
import { AddCategory, GifGrid  } from './components';

// Functional Component
export const GifExpertApp = () => {

    // Es importante que nuestro estado tenga un valor inicial, de lo contrario asume undefined
    const [categories, setCategories] = useState(['One Punch']);

    // const onAddCategory = () => {
    //     // Operador spread (...) hace una copia de los elementos del arreglo
    //     console.log('Agregando nuevo elemento');

    //     setCategories(['Mazinger Z', ...categories]);
    //     //setCategories([...categories, 'Mazinger Z']);
    // }

    const onAddCategory = (newCategory) => {
        // Valida que los nombres sean unicos
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* Titulo */}

            <h1>GifExpertApp</h1>

            {/* Entrada */}

            {/* Se manda la propertie setCategories con el valor de setCategories */}
            {/* Nueva Property onNewCategory */}
            {/* Crear un Input y emitir el valor cuando el usuario da un enter */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />


            {/* Listado de Gif */}

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                )
                )

            }




        </>
    )
}
