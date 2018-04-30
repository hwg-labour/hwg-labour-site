import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import Banner from "../Banner";

// ----------------------------------------------------

const Header = props => (
	<div>
		<Header { ...props } />

		{props.homepage && <Banner />}

		{props.children}
	</div>
);

Header.propTypes = {
	children: PropTypes.node,
};

// ----------------------------------------------------

export default Header;
