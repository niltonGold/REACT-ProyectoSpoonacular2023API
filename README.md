# Inicio del proyecto (Creacion)

Este proyecto fue creado en react con el comando "npx react-create-app|5.0.1 proyectorecetas"

### Características principales

Este proyecto tiene como obejtivo comprobar la manipulación y correcto uso de las APIS
mediante el comando fecht

### Tecnologías utilizadas en este proyecto

HTML, CSS, JAVASCRIPT, REACT JS

### Descripción del proyecto

En este proyecto se usara la API de la pagina "https://spoonacular.com/food-api/docs#Search-Recipes-Complex"
para poder realizar consultas de recetas de diferentes partes del mundo, como comida japosena, americana,
etc.
Se realizaran filtros y llamados a la API para que los datos de dicha API puedan ser mostrados por pantalla

### Enlaces a recuersos adicionales

"https://mui.com/material-ui/getting-started/overview/"
para poder realizar algunos componentes, se utilizo el mui o material user interface

## Información adicional

En este proyecto se utiliza mucho en traspaso de información a traves de los componentes padres
a hijo e hijos a padres.

## Issues detectados por codefactor

'setBtns2' is assigned a value but never used. lines of code = 1
Found in src\components\center\index.jsx:84
const [btns2, setBtns2] = useState( btnlist2 );

'setBtns1' is assigned a value but never used. lines of code = 1
Found in src\components\center\index.jsx:83
const [btns1, setBtns1] = useState( btnlist1 );

'useEffect' is defined but never used. lines of code = 1
Found in src\components\center\index.jsx:1
import React, { useRef, useEffect, useState } from 'react';

React Hook useEffect has a missing dependency: 'prop.id'. Either include it or remove the dependency array. lines of code = 1
Found in src\components\recipe_ingredients\index.jsx:39
}, [] );

Unexpected duplicate "display" (declaration-block-no-duplicate-properties) lines of code = 1
Found in src\components\center\style.css:18
display: flex;

Unexpected duplicate "display" (declaration-block-no-duplicate-properties) lines of code = 1  
Found in src\components\center\style.css:18
display: flex;

React Hook useEffect has a missing dependency: 'prop.id'. Either include it or remove the dependency array. lines of code = 1
Found in src\components\recipe_nutririons\index.jsx:29
}, [] );

img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. lines of code = 1
Found in src\components\recipe_btn\index.jsx:28
<img className='img_btn' src={prop.sourceimage} />

React Hook useEffect has missing dependencies: 'prop.searchInApi_child' and 'prop.typeRecipeChild'. Either include them or remove the dependency array. lines of code = 1
Found in src\components\recipe_btn\index.jsx:21
}, [] );

img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. lines of code = 1
No need to Create Comment on GitHub - this issue is already resolved No need to Create Issue on GitHub - this issue is already resolved No need to Ignore - this issue is already resolved Read Up
Found in src\components\header\index.jsx:13
<img className='tierra_image' src={tierra} />

img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. lines of code = 1  
Found in src\components\header\index.jsx:12
<img className='banner_image' src={banner} />

img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. lines of code = 1  
Found in src\components\header\index.jsx:11
<img className='logo_image' src={logo} />

todos los issues detectados por codefactor "https://www.codefactor.io/dashboard" fueron corregidos correctamente
