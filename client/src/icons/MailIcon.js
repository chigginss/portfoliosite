import React from 'react';
import '../css/portfolio.scss';

const MailIcon = ({
    style = {},
    fill = "#FFCF99",
    width = "100%",
    className = "icon",
    viewBox = "0 0 24 24"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
        fill={fill}
        d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
        />
    </svg>
);
  
export default MailIcon;