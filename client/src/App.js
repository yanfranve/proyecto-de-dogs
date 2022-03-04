import { Route, Switch } from "react-router";
import "./App.css";
//import AddBoton from './components/AddBoton';
import AddDogs from "./components/AddDogs";
import Banner from "./components/Banner";
import Dogs from "./components/Dogs";
import DogsDetail from "./components/DogsDetail/DogsDetail";
import FooterDogs from "./components/FooterDogs";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import NavBarDetails from "./components/NavBar/NavBarDetails";
import NavBarFiltros from "./components/NavBar/NavBarFiltros";
// import Order from './components/Order';
// import OrderRaza from './components/OrderRaza';
// import SearchBar from './components/SearchBar';
// import Temperament from './components/Temperament';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dogs/agregar">
          <NavBarDetails />
          <AddDogs />
          <FooterDogs />
        </Route>
        <Route path="/dogs/:id">
          <NavBarDetails />
          <DogsDetail />
          <FooterDogs />
        </Route>
        <Route path="/dogs">
          <NavBar />
          <NavBarFiltros />
          <Banner />
          <Dogs />
          <FooterDogs />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
