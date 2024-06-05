import React from "react";
import "./styles.css";

interface QuizOptionProps {
  option: string;
  onSelect: (option: string) => void;
  selectedOption: string;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  onSelect,
  selectedOption,
}) => {
  const isSelected = selectedOption === option;

  return (
    <div
      className={`quiz-option ${isSelected ? "quiz-option--selected" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </div>
  );
};

export default QuizOption;
