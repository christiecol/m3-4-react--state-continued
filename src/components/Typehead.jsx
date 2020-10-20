import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const Typehead = ({ suggestions, handleSelect, categories }) => {
  const [value, setValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);
  // What user types into input field
  const handleTypeInput = (ev) => {
    setValue(ev.target.value);
  };

  // call handleSelect when user clicks enter
  const keyDown = (ev) => {
    switch (ev.key) {
      case "Enter":
        handleSelect(value);
        return;

      case "ArrowUp": {
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
        break;
      }
      case "ArrowDown": {
        if (selectedIndex < matches.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
        break;
      }
    }

    // if (ev.key === "Enter") {
    //   handleSelect(value);
    // }
  };

  //reset input field value to empty
  const handleClear = () => {
    setValue("");
  };

  //filtering matches from input field
  const matches = suggestions.filter((suggestion) => {
    const lowerCaseTitle = suggestion.title.toLowerCase();
    const lowerCaseTerm = value.toLowerCase();

    const isIncluded = lowerCaseTitle.includes(lowerCaseTerm);
    const moreThanTwoChars = value.length >= 2;
    return isIncluded && moreThanTwoChars;
  });

  return (
    <>
      <div>
        <InputField
          value={value}
          type="text"
          onChange={handleTypeInput}
          onKeyDown={keyDown}
        />
        <ClearButton onClick={handleClear}>Clear</ClearButton>
      </div>

      {matches.length > 0 && (
        <Suggestions>
          {matches.map((match, matchIndex) => {
            const category = categories[match.categoryId];

            const isSelected = matchIndex === selectedIndex;

            return (
              <Suggestion
                key={match.id}
                match={match}
                category={category}
                matchIndex={matchIndex}
                setSelectedIndex={setSelectedIndex}
                isSelected={isSelected}
                searchTerm={value}
                onClick={() => {
                  handleSelect(match.title);
                }}
              />
            );
          })}
        </Suggestions>
      )}
    </>
  );
};

const ClearButton = styled.button`
  border: none;
  background: #6ab0ff;
  background-image: -webkit-linear-gradient(top, #6ab0ff, #ff845e);
  background-image: -moz-linear-gradient(top, #6ab0ff, #ff845e);
  background-image: -ms-linear-gradient(top, #6ab0ff, #ff845e);
  background-image: -o-linear-gradient(top, #6ab0ff, #ff845e);
  background-image: -webkit-gradient(to bottom, #6ab0ff, #ff845e);
  border-radius: 10px;
  margin-left: 1.5rem;
  padding: 0.75rem;
  color: #ffffff;
  font-family: monospace;
  font-size: 2rem;
  -webkit-box-shadow: 1px 1px 10px 0 #000000;
  -moz-box-shadow: 1px 1px 20px 0 #000000;
  box-shadow: 1px 1px 10px 0 #000000;
  text-shadow: 1px 1px 20px #000000;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  outline: none;

  &:hover {
    border: solid #ffffff 0;
    background: #7cbaff;
    background-image: -webkit-linear-gradient(top, #7cbaff, #fb7045);
    background-image: -moz-linear-gradient(top, #7cbaff, #fb7045);
    background-image: -ms-linear-gradient(top, #7cbaff, #fb7045);
    background-image: -o-linear-gradient(top, #7cbaff, #fb7045);
    background-image: -webkit-gradient(to bottom, #7cbaff, #fb7045);
    border-radius: 10px;
    text-decoration: none;
  }
`;

const InputField = styled.input`
  width: 23rem;
  height: 3.5rem;
  font-size: 2rem;
  font-family: monospace;
  border: 1px solid #e3e3e3;
  border-radius: 7px;
`;

const Suggestions = styled.ul`
  width: 23rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default Typehead;
