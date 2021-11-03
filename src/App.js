import { Switch,Route } from "react-router-dom";
import QuoteItem from "./components/quotes/QuoteItem";
import QuoteList from './components/quotes/QuoteList';
import QuoteForm from './components/quotes/QuoteForm';
import CommentsList from "./components/comments/CommentsList";
import CommentItem from "./components/comments/CommentItem";
import NewCommentForm from "./components/comments/NewCommentForm";


function App() {
  return (
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

        <Route path="/comments" exact>
          <CommentsList/>
        </Route>
        <Route path="/comments/:commentId">
          <CommentItem/>
        </Route>
        <Route path="/comments/new-comment" exact>
          <NewCommentForm/>
        </Route>
      </Switch>
  );
}

export default App;
