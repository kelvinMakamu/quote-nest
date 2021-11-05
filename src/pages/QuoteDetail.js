import { useEffect } from "react";
import { Link, Route, useParams,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
    {id:'q1',author:'Kelvin', text:'A quick brown fox jumped over the lazy dogs'},
    {id:'q2',author:'Justin', text:'A Crated brown fox jumped over the lazy dogs'},
    {id:'q3',author:'Waithero', text:'A curated brown fox jumped over the lazy dogs'},
    {id:'q4',author:'NJambi', text:'A tailored brown fox jumped over the lazy dogs'},
];

const QuoteDetail = () => {
    
    const params = useParams();
    const match = useRouteMatch();
    const { quoteId } = params;

    const {sendRequest,status, data:loadedQuote, error } = useHttp(getSingleQuote,true);

    useEffect(()=>{
        sendRequest(quoteId)
    },[sendRequest,quoteId]);

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner/>
        </div>;
    }

    if(error){
        return <p className='centered focused'>{error}</p>;
    }

    if(!loadedQuote.text){
        return <p className='centered focused'>No Quote found</p>;
    }

    return (
        <>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
              <Comments/>
            </Route>
        </>
    )
}

export default QuoteDetail;