import styled from "styled-components";

const InputRange = styled.input`
  width: 300px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-webkit-slider-runnable-track {
    border-radius: 5px;
    height: 10px;
    background-color: cyan;
  }

  &::-webkit-slider-thumb {
    background: #ecf0f1;
    border: 1px solid cyan;
    border-radius: 10px/100%;
    cursor: pointer;
    width:15px;
    height: 15px;
    -webkit-appearance: none;
    margin-top: -4px;
  }

  &::-moz-range-track {
    border-radius: 5px;
    height: 10px;
    background-color: cyan;
  }

  &::-moz-range-thumb {
    background: #ecf0f1;
    border: 1px solid cyan;
    border-radius: 10px/100%;
    cursor: pointer;
  }
`;

const InputNumber = styled.input`
  background-color: #eee;
  vertical-align: top;
  outline: none;
  padding: 0;
  margin: 10px;
  line-height: 30px;    
  text-indent: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 3px;

  &:focus {
    outline: 2px solid blue;
  }
`;

export {
  InputRange,
  InputNumber,
};
