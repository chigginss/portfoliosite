import React, { Component, List } from 'react';
import wday from './videos/what_dragon_are_you.mp4';
import './portfolio.scss';

class ExperienceCard extends Component {

    render() {
        const listItems = this.props.texts.map((text, i) =>
            <li key={i}>{text}</li>
        )
        return (
            <div className="experienceCard">
                <h2 className="position">{this.props.position}</h2>
                <div className="experienceCardSubHead">
                    <div className="experienceCardSubHeader">{this.props.date}</div>
                </div>
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

