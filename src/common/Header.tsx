import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageNumState } from "../utils/atom";

function Header() {
  const [pageNum, setPageNum] = useRecoilState(pageNumState);

  const moveToMain = () => {
    setPageNum(0);
  };

  return (
    <Root>
      <div onClick={moveToMain}>{pageNum === 1 ? "<" : "✅"}</div>
      <h1>Leonardo</h1>
      <h2>x</h2>
    </Root>
  );
}

export default Header;

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
`;
