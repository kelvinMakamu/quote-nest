import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {

    const params = useParams();

    return (
        <>
            <h2>Quote detail Page</h2>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
              <Comments/>
            </Route>
        </>
    )
}

export default QuoteDetail;