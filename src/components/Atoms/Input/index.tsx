import styled from 'styled-components';

const Input = styled.input`
    margin: 0;
    padding: 11px;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    line-height: 1;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${props => props.theme.black};
`;

export default Input;
