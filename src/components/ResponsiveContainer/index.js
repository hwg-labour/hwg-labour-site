import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import Banner from "../Banner";

// ----------------------------------------------------

const ResponsiveContainer = props => (
	<div>
		<Header { ...props } />

		{props.homepage && <Banner />}

		{props.children}
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

// ----------------------------------------------------

export default ResponsiveContainer;
