import { useContext } from "react";
import { PageContext } from "./context/pageContext";
import Header from "./components/header";
import Main from "./components/main";
import Home from "./components/home";
import Content from "./components/content";
import Location from "./components/location";
import Episodes from "./components/episodes"; // import the Episodes component

function App() {
  const { currentPage } = useContext(PageContext);
  return (
    <>
      <Header />
      <Main>
        {currentPage === "Home" ? (
          <Home />
        ) : currentPage === "Search" ? (
          <Content />
        ) : currentPage === "Location" ? (
          <Location />
        ) : currentPage === "Episodes" ? ( 
          <Episodes />
        ) : null}
      </Main>
    </>
  );
}

export default App;
