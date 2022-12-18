import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Header from "../../common/Header";
import { pageNumState, SizeInfoState } from "../../utils/atom";

function Main() {
  const [pageNum, setPageNum] = useRecoilState(pageNumState);
  const hasSizeInfo = useRecoilValue(SizeInfoState);

  const activate = () => {
    setPageNum(1);
  };

  const pause = () => {
    setPageNum(0);
  };

  return (
    <Root>
      <div>{hasSizeInfo ? <h1>Ready to start shopping!</h1> : <p>Size Recommentdation is inactive.</p>}</div>
      <button onClick={hasSizeInfo ? pause : activate}>{hasSizeInfo ? "pause" : "ACTIVE"}</button>
    </Root>
  );
}

export default Main;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  font-size: 24px;
`;
