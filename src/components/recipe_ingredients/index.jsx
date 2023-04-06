import React, { useEffect, useState } from 'react'
import '../../components/recipe_ingredients/style.css';


const apiKey = '40b9dfd98963482c8519fabf84cf69d4';


let initialListIngredients = 
  {
      ingredients: [
        {
          name: "nn",
          image: "nn",
          amount: {
            metric: {
              value: 0,
              unit: "nn"
            },
            us: {
              value: 0,
              unit: "nn"
            }
          }
        }
      ]
  }


export const RecipeIngredients = ( prop ) => {

  const [ingredientList, updateIngredientList] = useState( initialListIngredients );


  useEffect( () => {
    fetch( `https://api.spoonacular.com/recipes/${prop.id}/ingredientWidget.json?&apiKey=${apiKey}` )
      .then( response => response.json() )
        .then( data => data.status !== undefined ? updateIngredientList(initialListIngredients) : updateIngredientList(data) );

  });
  

    return (
      <>
       
              <div className='ingredients_table'>  
                <div className='ingrediens_table_title'>Nombre</div>
                <div className='ingrediens_table_title'>Medida</div>
              </div>
        
              {
                    ingredientList.ingredients.map( ( e, i ) =>
                      <div key={i} className='ingredients_table'>
                        <div className='fila'>{e.name}</div>
                        <div className='fila'>{e.amount.metric.value} g</div>
                      </div>
                    )
              }
      
      </>
    )
}
