import "./App.css";
import { Route, useLocation } from "react-router-dom";

//import Cards from "./components/Cards/Cards";
import Details from "./wiews/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import Home from "./wiews/Home/Home";
import Landing from "./wiews/Landing/Landing";
import LandingPage from "./components/PortFolio/LandingPage";
import Form from "./wiews/Form/Form";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/create" render={() => <Form />} />
      <Route exact path="/detail/:id" render={() => <Details />} />
      <Route exact path="/landing" render={() => <LandingPage />} />
    </div>
  );
}

export default App;
