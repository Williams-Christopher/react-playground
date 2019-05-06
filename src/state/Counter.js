import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    static defaultProps = {
        step: 1,
    }

    constructor(props) {
        console.log('Props in constructor ', props);
        super(props);

        this.state = {
            count: 0,
        };
    }

    handleButtonClick = () => {
        console.log('Props in handleButtonClick ', this.props);
        console.log('State in handleButtonClick ', this.state);
        const newCount = this.state.count + this.props.step;
        this.setState({
            count: newCount,
        });
    }

    render() {
        return (
            <div>
                <p>The current count is: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>Add 1</button>
            </div>
        );
    };
};

export default Counter;