import React from "react";
import styled from "styled-components";

const Suggestion = (props) => {
  const {
    match,
    onClick,
    searchTerm,
    category,
    isSelected,
    matchIndex,
    setSelectedIndex,
  } = props;

  const lowerCaseSuggestion = match.title.toLowerCase();

  const matchStart = lowerCaseSuggestion.indexOf(searchTerm.toLowerCase());
  const matchEnd = matchStart + searchTerm.length;

  const firstHalf = match.title.slice(0, matchEnd);
  const secondHalf = match.title.slice(matchEnd);

  return (
    <Wrapper
      onMouseOver={(ev) => {
        setSelectedIndex(matchIndex);
      }}
      isSelected={isSelected}
      onClick={onClick}
    >
      <span>
        {firstHalf}
        <Prediction>{secondHalf}</Prediction>
      </span>{" "}
      in <Category>{category.name}</Category>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 7px;
  background-color: ${(props) => (props.isSelected ? "#fffbe6" : "white")};
  // &:hover {
  //   background-color: #fffbe6;
  // }
`;
//#fffbe6
const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  color: purple;
`;

export default Suggestion;
