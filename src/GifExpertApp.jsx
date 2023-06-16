import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {

        // console.log(newCategory);

        if (categories.includes(newCategory)) return;
        //Ambas formas son correctas
        // setCategories( [ newCategory, ...categories] );
        setCategories(cat => [newCategory, ...cat]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onAddCategory={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
