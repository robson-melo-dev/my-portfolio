import React from "react";
import PropTypes from "prop-types";
import './Title.css'

function Title(props) {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size * 0.3365}
          version="1.1"
          viewBox="0 0 122.989 41.39"
        >
          <defs>
            <path d="M129.771 263.868h609.924v542.876H129.771z"></path>
          </defs>
          <g display="inline" transform="translate(-49.048 -88.152)">
            <text
              xmlSpace="preserve"
              style={{ lineHeight: "1.25" }}
              x="48.261"
              y="123.587"
              fill={props.color}
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.513"
              display="inline"
              fontFamily="sans-serif"
              fontSize="49.215"
              fontStyle="normal"
              fontWeight="400"
            >
              <tspan
                style={{}}
                x="48.261"
                y="123.587"
                strokeWidth="0.513"
                fontFamily="Dancing Script"
                fontSize="49.215"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="400"
              >
                Robson
              </tspan>
            </text>
          </g>
        </svg>
      );
}

Title.propTypes={
    color: PropTypes.string,
    size: PropTypes.number,
};
Title.defaultProps={
    color: "red",
    size:400 
};

export default Title;