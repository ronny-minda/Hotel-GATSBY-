import React from 'react';
import Header from './header';
import Footer from './footer';
// import { Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';
import useSeo from '../hooks/use-seo';



const Layout = (porps) => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description, title } } = seo;

    console.log(seo);
    

    return ( 
        <>
            <Global 
                styles= {css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *::after {
                        box-sizing: inherit;
                    } 
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
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
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css' rel='stylesheet'/>

            </Helmet>


            <Header />
            {porps.children}

            <Footer title={title} />
        </>
    );
}

export default Layout;