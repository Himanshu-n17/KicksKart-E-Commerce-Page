import Nav from "./Navigation/nav";
import Products from "./Products/products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Side Bar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
