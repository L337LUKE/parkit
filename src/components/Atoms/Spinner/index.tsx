import styled from 'styled-components';

const SpinnerContainer = styled.div`
    width: 25px;
    height: 25px;
    position: relative;
    margin: auto;
`;

const SpinnerChild = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
        @include square(15%);
        content: '';
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        animation: sk-circleBounceDelay $animation_duration infinite ease-in-out
            both;
        transform-origin: 100% auto;
    }
`;

const Spinner = () => (
    <SpinnerContainer>
        {Array.from({ length: 12 }, (_value, key) => (
            <SpinnerChild key={`spinner-${key}`} />
        ))}
    </SpinnerContainer>
);

export default Spinner;
