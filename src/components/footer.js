import React from 'react';
import { css } from '@emotion/react';
import Navegacion from './nav';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const EnlaceHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;

` 


const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
        <>
        <footer
            css={css`
                background-color: #333;
                padding: 1rem;
            `}
        >
            <div 
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 769px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                    }
                `}
            >
                
                <Navegacion />
                
                <EnlaceHome
                    to='/'
                >
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>
                

                

            </div>

        </footer>
        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}
        >{title}, Todos los derechos reservados {year} &copy;</p>
        
        </>
    );
}
 
export default Footer;