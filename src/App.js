import { Switch,Route } from "react-router-dom";
import QuoteItem from "./components/quotes/QuoteItem";
import QuoteList from './components/quotes/QuoteList';
import QuoteForm from './components/quotes/QuoteForm';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/quotes" exact>
          <QuoteList/>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteItem/>
        </Route>
        <Route path="/quotes/new-quote" exact>
          <QuoteForm/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
