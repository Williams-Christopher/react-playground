import React from 'react';

class Image extends React.Component {
    static defaultProps = {
        imageSrc: 'https://picsum.photos/250/250',
        altText: 'An image from Picsum',
        description: 'Default descriptive text',
    };

    render() {
        return (
            <div>
                <img src={this.props.imageSrc} alt={this.props.altText} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Image;