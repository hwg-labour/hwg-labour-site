import { Nav } from '../toolbox';

import Logo from "./Logo";
import PropTypes from "prop-types";
import React from "react";

import {
	getLinks,
} from './links'

const Navigation = ( { homepage, wards, groups }, ) => (
	<Nav
		logo = { <Logo /> }
		clear = { homepage ? true : false }
		fixed = { homepage ? false : true }
		links = { getLinks(wards, groups) }
	/>
);

Navigation.propTypes = {
	homepage: PropTypes.bool,
	wards: PropTypes.object,
	groups: PropTypes.object,
};

export default Navigation;
