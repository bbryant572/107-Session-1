import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import QuantityPicker from "./components/quantityPicker";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to my super online store!</h1>

      <QuantityPicker></QuantityPicker>

      <Footer></Footer>
    </div>
  );
}

export default App;
