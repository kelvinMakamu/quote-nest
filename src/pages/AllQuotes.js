import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id:'q1',author:'Kelvin', text:'A quick brown fox jumped over the lazy dogs'},
    {id:'q2',author:'Justin', text:'A Crated brown fox jumped over the lazy dogs'},
    {id:'q3',author:'Waithero', text:'A curated brown fox jumped over the lazy dogs'},
    {id:'q4',author:'NJambi', text:'A tailored brown fox jumped over the lazy dogs'},
];

const AllQuotes = () => {
    return  <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;