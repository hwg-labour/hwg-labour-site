import React from "react";
import PropTypes from "prop-types";

import DesktopContainer from "./DesktopContainer";
import TabletContainer from "./TabletContainer";
import MobileContainer from "./MobileContainer";

// ----------------------------------------------------

// ----------------------------------------------------

const ResponsiveContainer = props => (
	<div>
		<DesktopContainer { ...props }>{props.children}</DesktopContainer>

		<TabletContainer { ...props }>{props.children}</TabletContainer>

		<MobileContainer { ...props }>{props.children}</MobileContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

export default ResponsiveContainer;
