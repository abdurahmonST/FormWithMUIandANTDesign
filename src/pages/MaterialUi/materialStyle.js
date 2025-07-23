import styled from "styled-components";

export const MaterialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    margin: 0  500px;
    padding: 20px 0;

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .StepperWrapper {
        display: flex;
        margin: 50px;

        .MakeColumn {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`