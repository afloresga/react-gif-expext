
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un Functional Component regresa JSX
export const useFetchGifs = (category) => {

    // Inicializa el estado con un arreglo vacio
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Se crea esta constante para poder trabajar con el useEffect
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
