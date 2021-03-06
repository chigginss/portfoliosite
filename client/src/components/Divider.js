import React from 'react';
import PropTypes from 'prop-types';
import '../css/portfolio.scss';

export const Divider = ({
    text
}) => {
  return (
    <div id={text.toLowerCase()} className="sectionHeader">
        <div className="dividerTitle">{text}</div>
        <hr className="divider"></hr>
    </div>
  );
};

Divider.propTypes = {
    text: PropTypes.string
};

export default Divider;