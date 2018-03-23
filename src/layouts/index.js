import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import ResponsiveContainer from "../components/ResponsiveContainer";

// ----------------------------------------------------

export const WardAndCandidateQuery = graphql`
	query MenuWards {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
				}
			}
		}
	}
`;
/*
export const WardAndCandidateQuery = graphql`
	query WardAndCandidateQuery {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
				}
			}
		}
		contentfulCandidates: allContentfulCandidate {
			edges {
				node {
					id
					name
				}
			}
		}
	}
`;*/

// ----------------------------------------------------

const TemplateWrapper = props => (
	<ResponsiveContainer
		homepage = { props.location.pathname === "/" }
		wards = { props.data.contentfulWards }
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

		{ props.children(...props) }

		<Footer />
	</ResponsiveContainer>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
