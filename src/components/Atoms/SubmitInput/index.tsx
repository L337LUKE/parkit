import styled from 'styled-components';

const SubmitInput = styled.input`
    align-items: center;
    border-radius: 0;
    border: 1px solid transparent;
    background: ${props => props.theme.turqoise};
    cursor: pointer;
    color: ${props => props.theme.black};
    display: inline-block;
    flex: 1 0 auto;
    font-size: 1em;
    font-weight: 700;
    justify-content: center;
    line-height: 1.15;
    max-width: 100%;
    margin: 0;
    padding: 0.6875em 1.25em;
    text-decoration: none;
    touch-action: manipulation;
    transition: 100ms ease color, 100ms ease background, 100ms ease border;
    user-select: none;
    white-space: nowrap;

    &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }

    &:hover,
    &:focus {
        color: ${props => props.theme.white};
    }
`;

export default SubmitInput;
