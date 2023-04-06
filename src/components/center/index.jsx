import React, { useRef, useState } from 'react';
import '../center/style.css';
import { RecipeBtn } from '../recipe_btn';
import Chinese from '../../images/china.png';
import Japanese from '../../images/japon.png';
import Spanish from '../../images/espana.png';
import American from '../../images/eeuu.png';
import Mexican from '../../images/mexico.png';
import Pescetarian from '../../images/pescado.JPG';
import French from '../../images/francia.png'; 
import Vegetarian from '../../images/vegetales.jpg';
import RecipeCard from '../recipe_card';


const btnlist1 = [
        {
          search: Chinese,
          descripcion: 'Comida China',
          searchInApi: 'Chinese',
          typeRecipe: 'cuisine'
        }
        ,
        {
          search: Japanese,
          descripcion: 'Comida Japonesa',
          searchInApi: 'Japanese',
          typeRecipe: 'cuisine'
        },
        {
          search: Spanish,
          descripcion: 'Comida Española',
          searchInApi: 'Spanish',
          typeRecipe: 'cuisine'
        },
        {
          search: American,
          descripcion: 'Comida Americana',
          searchInApi: 'American',
          typeRecipe: 'cuisine'
        }
];


const btnlist2 = [
        {
          search: Mexican,
          descripcion: 'Comida Mexicana',
          searchInApi: 'Mexican',
          typeRecipe: 'cuisine'
        },
        {
          search: Pescetarian,
          descripcion: 'Comida con Pescado',
          searchInApi: 'Pescetarian',
          typeRecipe: 'diet'
        },
        {
          search: French,
          descripcion: 'Comida Francesa',
          searchInApi: 'French',
          typeRecipe: 'cuisine'
        },
        {
          search: Vegetarian,
          descripcion: 'Comida Vegetariana',
          searchInApi: 'vegetarian',
          typeRecipe: 'diet'
        }
];


const initialList = [
        {
        "id": 0,
        "title": "",
        "image": "",
        "imageType": "nn"
        },
];

export const Center = () => {

  // const [btns1, setBtns1] = useState( btnlist1 );
  const btns1 = btnlist1;
  // const [btns2, setBtns2] = useState( btnlist2 );
  const btns2 = btnlist2;
  const [list, updateList] = useState( initialList );
  const [showList, updateShowList] = useState( false );
  const [titleList, updateTitleList] = useState( '' );
  const listRef = useRef( null );

  const handleEventFather = ( listRecipeFromChild, tituloListaFromChild ) => {

    listRef.current.scrollIntoView();

    if ( listRecipeFromChild.status !== undefined ) {
      console.log( 'La api no responde' );
      updateTitleList( 'La api no responde' );
      updateShowList( true );
    }

    if ( listRecipeFromChild.results !== undefined) {
      updateList( listRecipeFromChild.results );
      updateTitleList( tituloListaFromChild );
      updateShowList( true );
    }

  }


  return (
    <>
      <div className='center'>

        <div className='buttons_recipes'>

              <div className='titulo'>Selecciona una opción para poder ver la lista de recetas</div>

              <div className='buttons_container'>
                {
                  btns1.map( ( e, i ) => <RecipeBtn
                    key={i}
                    typeRecipeChild={e.typeRecipe}
                    searchInApi_child={e.searchInApi}
                    handleEventFromChild={handleEventFather}
                    sourceimage={e.search}
                    parrafo={e.descripcion} />
                  )
                }
              </div>

              <div className='buttons_container'>
                {
                    btns2.map( ( e, i ) => <RecipeBtn
                      key={i}
                      typeRecipeChild={e.typeRecipe}
                      searchInApi_child={e.searchInApi}
                      handleEventFromChild={handleEventFather}
                      sourceimage={e.search}
                      parrafo={e.descripcion} />
                    )
                }
              </div>
           
        </div>

        <div className={( showList ) ? 'list_recipes' : 'listHide'}>
          <div className='titlelist' ref={listRef}>{ titleList }</div>
              {
                  list.map( ( e, i ) =>
                      <RecipeCard
                      id={e.id}
                      key={i}
                      sourceImageCard={e.image}
                      title={e.title} />
                  )  
              }
        </div>

      </div>
    </>
  )
}
