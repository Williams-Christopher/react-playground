import React from 'react';
import './Accordian.css'

export default class Accordian extends React.Component {
    static defaultProps = {
        sections: [],
    }

    state = {
        displaySection: null,
    }

    generateSections() {
        return this.props.sections.map((section, index) => {
            return (
                <li key={index} className='Accordian-list-item'>
                    <button key={index} className='Accordian-list-button' onClick={() => this.handleClick(index)}>
                        {section.title}
                    </button>
                    {index === this.state.displaySection ? <p className='Accordian-list-item-content'>{section.content}</p> : ''}
                </li>
            )
        });
    }

    handleClick(index) {
        if (index === this.state.displaySection) {
            index = null;
        }

        this.setState({
            displaySection: index,
        })
    }

    render() {
        return(
            <ul className='Accordian-list'>
                {this.generateSections()}
            </ul>
        )
    }
}