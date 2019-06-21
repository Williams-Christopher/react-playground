import React from 'react';
import './countrySelector.css';

class CountrySelector extends React.Component {
    
    changeSelection(value){
        if(value==='None') {
            this.props.changeHandler(null);
        } else {
            // Find the country selected
            const country = this.props.countries.find(country => country.name === value);
            this.props.changeHandler(country);
        }
    }

    render() {
        const options = this.props.countries.map((country, i) =>
            <option value={country.name} key={i}>{country.name}</option>
        );

        return(
            <div className='country_selector'>
                {this.props.loading
                    ? <div className='demonym_app__loading'>Loading data...</div>
                    :   <form>
                            <label htmlFor='country'>Select country:</label>
                            <select id='country'
                                    name='country'
                                    onChange={e => this.changeSelection(e.target.value)} >
                                <option value="None">Select one...</option>
                                {options}
                            </select>
                        </form>
                }
            </div>
        );
    }
}

CountrySelector.defaultProps = {
    countries: []
};

export default CountrySelector;