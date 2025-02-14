import { useState } from "react";
import { Question, QuestionContainer, StyledQuestions } from "./StyleFaq";

import { HiChevronDown } from "react-icons/hi";

function Questions({ questions, answers }) {
  const [show, setShow] = useState(true);
  return (
    <StyledQuestions>
      {questions?.map((question, index) => (
        <QuestionContainer key={index}>
          <Question>
            {question} <HiChevronDown />
          </Question>
          <p>{answers[index]}</p>
        </QuestionContainer>
      ))}
    </StyledQuestions>
  );
}

export default Questions;
