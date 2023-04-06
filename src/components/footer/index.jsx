import React from 'react';
import '../footer/style.css';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import cvDocument from '../documents/CurriculumVitae.pdf';

const urlLinkedin = 'https://www.linkedin.com/in/nilton-medina';
const urlPorfolio = 'http://www.niltonmedina.com/';


export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='foorter_container1'>
                    <div className='footer_firts_line'>
                    Pagina Creada por Nilton Enrique Medina Sayán
                    </div>
                    <div className='footer_second_line' >
                        <div className='footer_second_line'>
                            <LinkedInIcon/>
                            <a className='urlLink' href={urlLinkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                        <div className='footer_second_line'>
                            <WorkIcon />
                            <a className='urlLink' href={urlPorfolio} target="_blank" rel="noopener noreferrer">Porfolio</a>

                        </div>
                        <div className='footer_second_line'>
                            <ArticleIcon/>
                            <a className='urlLink' href={cvDocument} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">Curriculum Vitae</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
