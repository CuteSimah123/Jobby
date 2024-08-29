import Homepage from "./Containers/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import SearchBar from "./Components/SearchBar/SearchBar";
import LogIn from "./Containers/LogIn/LogIn";
import SignIn from "./Containers/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./Containers/AboutPage/AboutPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SearchBar />
      <Homepage />
      <LogIn />
      <SignIn />
      <Footer />
      <AboutPage />
    </div>
  );
};
export default App;

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignIn />,
  },
  { path: "/", element: <Homepage /> },
]);

export { router };
