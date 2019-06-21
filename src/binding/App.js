import React from 'react';

/*
 *  A sort of regurgitation / summation in code of an article by Saurabh Misra on
 *  Free Code Camp explaining binding in JS and thus React.
 *  https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Provides explicit hard binding for button 2 example
        this.explicitHandler = this.explicityBoundHandler.bind(this);
    }

    // Button 1
    // Logs undefined because the context for 'this' is lost when the function reference is assigned to another variable
    unboundHandler() {
        console.log(this);
    }

    // Button 2
    // Logs the App component - works becasue we have explicity provided context for the function reference in the
    // constructor, binding it to the object / class where it was defined
    explicityBoundHandler() {
        console.log(this);
    }

    // The next two examples use arrow functions. Arrow functions bind 'this' lexically, using the context of the
    // enclosing function as the value for 'this'
    
    // Button 3
    // Logs the App component - the arrow function is enclosed in our App class so the context for 'this' is the instance
    // of the enclosing class
    pcfSyntaxHandler = () => {
        console.log(this);
    }

    // Button 4
    // Logs the App component - Similar to button 3. The arrow function is enclosed in the render method and invoked in the
    // context of the App class instance.
    arrowFunctionHandler() {
        console.log(this);
    }

    render() {
        return (
            <>
                <h1>'this' Binding</h1>
                <p>See console for output.</p>

                {/* Button 1 */}
                <button type="button" onClick={this.unboundHandler}>1 - Unbound</button> 

                {/* Button 2 */}
                <button type='button' onClick={this.explicitHandler}>2 - Explicit</button>

                {/* Button 3 */}
                <button type='button' onClick={this.pcfSyntaxHandler}>3 - Lexical - PCF Syntax</button>

                {/* Button 4 */}
                <button type='button' onClick={() => this.arrowFunctionHandler()}>4 - Lexical - Arrow Func</button>
            </>
        );
    }
}