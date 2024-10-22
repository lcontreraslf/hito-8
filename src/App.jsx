import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      {/* <Pizza /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
