import React, { Component } from 'react';
import './chart.scss';

class BarChart extends Component {

    render() {
        return (
            <div>
             <div className="chart">
                <div className="barContainer">
                    <div className="bar" style={{"width": "90%"}}>
                        <div className="percent">90%</div>
                        <div className="label">JavaScript (NodeJS, JQuery, React) </div>
                    </div>
                </div>
                <div className="barContainer">
                    <div className="bar" style={{"width": "70%"}}>
                        <div className="percent">70%</div>
                        <div className="label">iOS and Android (React Native)</div>
                    </div>
                </div>
                <div className="barContainer">
                    <div className="bar" style={{"width": "65%"}}>
                        <div className="percent">65%</div>
                        <div className="label">Python</div>
                    </div>
                </div>
                <div className="barContainer">
                    <div className="bar" style={{"width": "90%"}}>
                        <div className="percent">90%</div>
                        <div className="label">HTML</div>
                    </div>
                </div>
                <div className="barContainer">
                    <div className="bar" style={{"width": "90%"}}>
                        <div className="percent">90%</div>
                        <div className="label">CSS</div>
                    </div>
                </div>
            </div>
             <div className="labels">
                 <div className="yaxis">N3WB</div>
                 <div className="yaxis">Amatuer</div>
                 <div className="yaxis">Professional</div>
                 <div className="yaxis">Master</div>
             </div>
        </div>
        );
    }
}

export default BarChart;