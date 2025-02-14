import styled from "styled-components";
export const StyledFaq = styled.article`
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-columns: 450px 500px;
  grid-template-rows: auto;
  /* grid-gap: 1rem; */
  justify-items: stretch;
  align-items: stretch;

  justify-content: center;

  padding: 10px 20px;
  color: var(--color-white-500);
`;

//Get details from
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  /* padding: 20px; */
  gap: 10px;
  background-color: var(--color-background-800);
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
  input[type="tel"] {
    width: 242px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  input[type="submit"] {
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: var(--color-primary);
    color: var(--color-white-500);
    cursor: pointer;
  }
`;

//Get details from
export const StyledFaqContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

//Questions
export const StyledQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-background-800);

  border-radius: 0px 10px 10px 0px;
`;
export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px;

  border-bottom: 1px solid var(--color-black-500);
`;
