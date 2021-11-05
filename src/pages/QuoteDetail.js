import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id:'q1',author:'Kelvin', text:'A quick brown fox jumped over the lazy dogs'},
    {id:'q2',author:'Justin', text:'A Crated brown fox jumped over the lazy dogs'},
    {id:'q3',author:'Waithero', text:'A curated brown fox jumped over the lazy dogs'},
    {id:'q4',author:'NJambi', text:'A tailored brown fox jumped over the lazy dogs'},
];

const QuoteDetail = () => {

    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote =>quote.id=== params.quoteId);

    if(!quote){
        return <p>No quote found</p>
    }

    return (
        <>
            <HighlightedQuote author={quote.author} text={quote.text}/>
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
              <Comments/>
            </Route>
        </>
    )
}

export default QuoteDetail;