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


const Header = () => {
    return (
        <header
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
                <EnlaceHome
                    to='/'
                >
                    <h1>Desde header</h1>
                </EnlaceHome>
                

                <Navegacion />

            </div>

        </header> 
    );
}
 
export default Header;