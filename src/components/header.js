import React from 'react';
import { css } from '@emotion/react';

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
                <h1
                    css={css`
                        color: #fff;
                        text-align: center;
                    `}
                >Desde header</h1>
            </div>
        </header> 
    );
}
 
export default Header;