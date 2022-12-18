import styled from "styled-components";

function Input() {
  const sizeSetting = ["Height", "Bust", "Waist", "Hip", "Legs"];
  return (
    <Root>
      <SizePicker>
        {sizeSetting.map((key) => (
          <div key={key}>
            <label htmlFor={key}></label>
            <input type="range" min="0" max="100" value="0" step="10" />
          </div>
        ))}
      </SizePicker>
      <button>Update</button>
    </Root>
  );
}

export default Input;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  & > button {
    margin-top: 30px;
    padding: 5px 7px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
  }
`;

const SizePicker = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    & > label {
      margin: 0 5px;
    }

    & > input:not(:last-child) {
      margin-top: 10px;
    }
  }
`;
