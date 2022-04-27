import React from 'react';
import Header from './header';
// import { Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';


const Layout = (porps) => {
    return ( 
        <>
            <Global 
                styles= {css`
                    html {
                        font-size: 62.5%;
                    }
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1 {
                        // tipografia
                    }
                `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css' rel='stylesheet'/>
            </Helmet>


            <Header />
            {porps.children}
        </>
    );
}

export default Layout;