import styled from 'styled-components';
import { Input, Label, SubmitInput } from '../../Atoms';

export const FormContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const StyledLabel = styled(Label)`
    flex: 1 1 100%;
`;

export const StyledInput = styled(Input)`
    width: 100%;

    @media only screen and (min-width: ${props => props.theme.small}) {
        flex: 0 1 70%;
    }
`;

export const StyledSubmit = styled(SubmitInput)`
    width: 100%;
    margin-top: 0.625em;
    border-bottom: 3px solid ${props => props.theme.turqoise};

    @media only screen and (min-width: ${props => props.theme.small}) {
        margin-top: 0;
        flex: 0 1 25%;
        width: auto;
    }
`;
