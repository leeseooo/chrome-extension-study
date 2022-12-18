import { pageNumState } from "../../utils/atom";
import { useRecoilState } from "recoil";
import Input from "./Input";
import Main from "./Main";
import Header from "../../common/Header";

function App() {
  const [pageNum, setPageNum] = useRecoilState(pageNumState);

  switch (pageNum) {
    case 0:
      return (
        <>
          <Header />
          <Main />
        </>
      );
    case 1:
      return (
        <>
          <Header />
          <Input />
        </>
      );
    default:
      return <div>error</div>;
  }
}

export default App;
