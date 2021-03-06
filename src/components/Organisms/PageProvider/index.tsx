import React, { Fragment } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import Head from 'next/head';
import { colors, media } from '../../../theme';
import { SkipLink } from '../../Atoms';
import { Header } from '../../Molecules';

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
        font-weight: 500;
        line-height: 1.45;
        color: #333;
      }

    p {margin-bottom: 1.3em;}

    h1, h2, h3, h4 {
        font-family: Montserrat, Verdana, Sans-Serif;
        font-weight: inherit;
        margin: 1em 0 0.5em;
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

const theme = {
    ...colors,
    ...media
};

export default ({ children }) => (
    <Fragment>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700"
                rel="stylesheet"
            />
        </Head>
        <ThemeProvider theme={theme}>
            <Fragment>
                <SkipLink href="#main">Skip to main content</SkipLink>
                <Header />
                <main id="main">{children && children}</main>
            </Fragment>
        </ThemeProvider>
    </Fragment>
);
