import styled from 'styled-components';

export const Ul = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;

    @media only screen and (min-width: ${props => props.theme.small}) {
        margin-left: -1.25rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
`;

export const Li = styled.li`
    display: flex;
    margin-bottom: 1.875em;

    @media only screen and (min-width: ${props => props.theme.small}) {
        min-width: 48%;
        max-width: 23%;
        margin-left: 2%;
        flex: 1 1 48%;
    }

    @media only screen and (min-width: ${props => props.theme.medium}) {
        min-width: 23%;
        max-width: 23%;
        margin-left: 1.25rem;
        margin-bottom: 3.125em;
        flex: 1 1 23%;
    }
`;
