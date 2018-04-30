import React from "react";
import PropTypes from "prop-types";

import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";

// ----------------------------------------------------

export const MenuGroupsAndWards = graphql`
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

// ----------------------------------------------------

const TemplateWrapper = props => (
	<Header
		homepage = { props.location.pathname === "/" }
		wards = { props.data.contentfulWards }
		groups = { props.data.contentfulGroups }
		candidates = { props.data.contentfulCandidates }
	>
		<Head />

		{ props.children(...props) }

		<Footer
			events = { props.data.contentfulEvents }
		/>
	</Header>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
