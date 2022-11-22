import { Redirect, Route, Switch } from 'react-router-dom';
import { AllQuotes } from './pages/AllQuotes';
import { QuoteDetail } from './pages/QuoteDetail';
import { NewQuote } from './pages/NewQuote';

function App() {
  return (
        <
        >
          <Route path={'/'} exact>
            <Redirect to={'quotes'}/>
          </Route>
          <Route path={'/quotes'} >
            <AllQuotes/>
          </Route>
          <Route path={'/quotes/quoteId'}>
            <QuoteDetail/>
          </Route>
          <Route path={'/new-quote'}>
            <NewQuote/>
          </Route>
        </>
  );
}

export default App;
