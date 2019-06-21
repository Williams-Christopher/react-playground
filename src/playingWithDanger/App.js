import React from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';

// import './App.css';

class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <CurrencyError>
                    Germany: <Currency value={21} locale='de-DE' currency='US' />
                </CurrencyError>
                <CurrencyError>
                    USA: <Currency value={21} locale={'en-US'} currency={'USD'} />
                </CurrencyError>
                <CurrencyError>
                    Something: <Currency value='100' locale='en-UK' currency='JPY' />
                </CurrencyError>
                <h2>The currency values displayed are subject to change without notice.</h2>
            </div>
        );
    }
}

export default App;