import React from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './languageContext';

class GreatGrandChild extends React.Component {
    static contextType = LanguageContext;
    // With context imported we can attach it to our class component. We can assign
    // our context to a static property call contextType, this will give us a new
    // instance property this.context.
    render() {
        // const copy = languageSpecificCopy['en-US'] || {};
        const copy = languageSpecificCopy[this.context.lang] || {}
        return(
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button onClick={() => this.context.setLang('klingon')} disabled={this.context.lang === 'klingon'}>
                    Klingon!{''}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        )
    }
}

export default GreatGrandChild;