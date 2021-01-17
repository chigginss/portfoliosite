import React, { Component } from 'react';
import '../css/portfolio.scss';

class ExperienceCard extends Component {

    render() {
        const listItems = this.props.texts.map((text, i) =>
            <li key={i}>{text}</li>
        )
        return (
            <div className="experienceCard">
                <h2 className="position">{this.props.position}</h2>
                <div className="experienceCardSubHeaderText">{this.props.date.toUpperCase()}</div>
                <div className='experineceCardText'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
};

export default ExperienceCard;

