import "semantic-ui-css/semantic.min.css";
import Footer from "../Footer";
import Head from "../Head";
import Header from "../Header";
import PropTypes from "prop-types";
import React from "react";
import { StaticQuery, graphql } from 'gatsby'

const Layout = ( props ) => {
	console.log(props)
	const { location, data, children, } = props

	return (
		<StaticQuery
	     query={menuGroupsAndWardsQuery}
	     render={data => (
	       <Header
						candidates = { data.contentfulCandidates }
						groups = { data.contentfulGroups }
						homepage = { location.pathname === "/" }
						wards = { data.contentfulWards }
					>
						<Head />

						{ children }

						<Footer events = { data.contentfulEvents } />
					</Header>
	     )}
	   />
	)
};

Layout.propTypes = {
	children: PropTypes.func,
	data: PropTypes.any,
	location: PropTypes.any,
};

export default Layout;

export const menuGroupsAndWardsQuery = graphql`
	query MenuGroupsWardsEvents {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
				}
			}
		}
		contentfulGroups: allContentfulGroup {
			edges {
				node {
					id
					name
				}
			}
		}
		contentfulEvents: allContentfulEvent {
			edges {
				node {
					title
					date
					socialEvent
				}
			}
		}
	}
`;