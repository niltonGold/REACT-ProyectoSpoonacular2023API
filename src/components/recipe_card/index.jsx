import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../recipe_card/style.css';
import { RecipeIngredients } from '../recipe_ingredients';
import { RecipeNutritions } from '../recipe_nutririons';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecipeCard( prop ) {


  const [openIngredients, setOpenIngredients] = React.useState( false );
  const [openNutritional, setOpenNutritional] = React.useState( false );


  const handleOpenIngredients = () => setOpenIngredients(true);
  const handleCloseIngredients = () => setOpenIngredients(false);


  const handleOpenNutritionals = () => setOpenNutritional( true );
  const handleCloseNutritionals = () => setOpenNutritional(false);


  return (
    <div className='card_container'>

      
        <img src={prop.sourceImageCard} alt="" />    
        
      
        <p>{prop.title}</p>
        
      
        <div className='Ingre_Valor_Nutri_container'>
        
            <Button onClick={handleOpenIngredients}>Ingredientes</Button>
        
            <Button onClick={handleOpenNutritionals}>Valores Nutricionales</Button>
        
        </div>
        
      
        <Modal
            open={openIngredients}
            onClose={handleCloseIngredients}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
              
                <Box sx={style}>
                      
                      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                          Ingredientes
                      </Typography>
                            
                      <RecipeIngredients id={prop.id} />
                              
                      <Button onClick={handleCloseIngredients}>Cerrar</Button>

                </Box> 
        
        </Modal>
      

        <Modal
            open={openNutritional}
            onClose={handleCloseNutritionals}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
              
                <Box sx={style}>
                      
                      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Valores Nutricionales
                      </Typography>

                      <RecipeNutritions id={ prop.id } />
                              
                      <Button onClick={handleCloseNutritionals}>Cerrar</Button>

                </Box>
              
        </Modal>
          
      
    </div>
  );
}
