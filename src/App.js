import './App.css';
import Header from './Header';
import Footer from './Footer';
import ListingPokemons from './ListingPokemons';

import { Route, Switch } from 'react-router-dom';
import SinglePokemonDetails from './SinglePokemonDetails';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ListingPokemons}></Route>
        <Route exact path="/pokemon/:slug" component={SinglePokemonDetails} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
