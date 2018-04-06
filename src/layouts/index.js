import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import ResponsiveContainer from "../components/ResponsiveContainer";

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
	<ResponsiveContainer
		homepage = { props.location.pathname === "/" }
		wards = { props.data.contentfulWards }
		groups = { props.data.contentfulGroups }
		candidates = { props.data.contentfulCandidates }
	>
		<Helmet
			title = "H&WG Labour"
			meta = { [
				{
					name: "description",
					content: "Hornsey and Wood Green Labour Party Website",
				},
				{
					name: "keywords",
					content:
						"Hornsey, Wood green, Labour, Party, Crouch End, Highgate, Alexandra, Stroud Green",
				},
			] }
		/>

		{props.children(...props)}

		<Footer
			events = { props.data.contentfulEvents }
		/>
	</ResponsiveContainer>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
