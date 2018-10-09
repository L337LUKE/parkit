import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Head from 'next/head';

injectGlobal`
    ${normalize()}

    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: Montserrat, Verdana, Arial;
    }

    body {
        background-color: white;
        font-family: 'Roboto', serif;
        font-weight: 500;
        line-height: 1.45;
        color: #333;
      }

    p {margin-bottom: 1.3em;}

    h1, h2, h3, h4 {
        font-family: Montserrat, Verdana, Sans-Serif;
        font-weight: inherit;
        margin: 1.414em 0 0.5em;
        line-height: 1.2;
    }

    h1 {
        margin-top: 0;
        font-size: 3.998em;
    }

    h2 {font-size: 2.827em;}

    h3 {font-size: 1.999em;}

    h4 {font-size: 1.414em;}

    small, .font_small {font-size: 0.707em;}
`;

export default ({ children }) => (
    <Fragment>
        <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700"
                rel="stylesheet"
            />
        </Head>
        {children && children}
    </Fragment>
);
