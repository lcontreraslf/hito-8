import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <Login /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
