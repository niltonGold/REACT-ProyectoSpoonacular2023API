import React, { useEffect, useState } from 'react';
import '../recipe_btn/style.css';


const apiKey = '40b9dfd98963482c8519fabf84cf69d4';


export const RecipeBtn = ( prop ) => {
    
    const [recipeList, updateRecipeList] = useState( [{}] );

    const handleClickBtn = () => {
         prop.handleEventFromChild( recipeList, prop.parrafo );
    };


    useEffect( () => {
        fetch( `https://api.spoonacular.com/recipes/complexSearch?${prop.typeRecipeChild}=${prop.searchInApi_child}&apiKey=${apiKey}` )
            .then ( response => response.json() )
                .then( data => updateRecipeList( data ) )
    } );

    
    return (
        <>
            <button className='btn_recipe' onClick={handleClickBtn}>
                <div>
                    <img className='img_btn' src={prop.sourceimage} alt=""/>
                </div>
                <div>
                    <p className='text_btn'>{prop.parrafo}</p>
                </div>
            </button>
        </>
    )

}
