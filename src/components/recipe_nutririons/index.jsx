import React, { useEffect, useState } from 'react'
import '../../components/recipe_nutririons/style.css';


const apiKey = '40b9dfd98963482c8519fabf84cf69d4';


let initialNutritions =
    {
        good: [
            {
                amount: "xxg",
                indented: false,
                title: "xxx",
                percentOfDailyNeeds: 0
            }
        ]   
    }


export const RecipeNutritions = ( prop ) => {

    const [goodNutritionstList, updateGoodNutritionstList] = useState( initialNutritions );
    
    useEffect( () => {
        fetch( `https://api.spoonacular.com/recipes/${prop.id}/nutritionWidget.json?&apiKey=${apiKey}` )
            .then( response => response.json() )
                .then( data => data.status !== undefined ? updateGoodNutritionstList(initialNutritions) : updateGoodNutritionstList(data) );
    }, [] );
    

    return (
        <>
            
                <div className='ingredients_table'>  
                    <div className='ingrediens_table_title'>Nombre</div>
                    <div className='ingrediens_table_title'>Cantidad</div>
                </div>
                
                {
                    goodNutritionstList.good.map( ( e, i ) =>
                        <div key={i} className='ingredients_table'>
                            <div className='fila'>{e.title}</div>
                            <div className='fila'>{e.amount}</div>
                        </div>
                    )
                    
                }
          
        </>
    )
}
