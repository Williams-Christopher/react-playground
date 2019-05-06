// Solutions: https://github.com/tomatau/state-drills/tree/master/src/state-drills

import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    }

    buttonWorld = () => {
        this.setState({
            who: 'world',
        });
    }

    buttonFriend = () => {
        this.setState({
            who: 'friend',
        });
    }

    buttonReact = () => {
        this.setState({
            who: 'React',
        })
    }

    // Solution suggestion looks like this:
    // <p>Hello, {this.state.who}!</p>
    //     <button onClick={() => this.setState({ who: 'world' })}>World</button>

    render () {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <div>
                    <button onClick={this.buttonWorld}>World</button>
                    <button onClick={this.buttonFriend}>Friend</button>
                    <button onClick={this.buttonReact}>React</button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;