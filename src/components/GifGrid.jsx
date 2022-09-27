import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Recibe la property category
export const GifGrid = ({ category }) => {

    //NOTA: Nunca se debe colocar la ejecucion de una funcion en un Functional Component

    // CustomHook
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando ....</h2>)
            }

            <div className='card-grid'>
                {
                    // Usando desestructuracion
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    )
                    )
                }
            </div>
        </>
    )
}
