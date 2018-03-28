import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

import banner from "../../images/banner-1.jpg";

import { Button, Container, Header, Image, Link, } from "semantic-ui-react";

// ----------------------------------------------------

const BannerImage = styled(Image)`
	position: absolute !important;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	object-fit: cover;
	max-height: 500px;
	width: 100%;
	z-index: -1;
`;

const HomepageHeading = props => (
	<Container text>
		{ 
			!props.mobile &&
			<BannerImage src = { banner } /> 
		}

		<Header
			as = "h1"
			content = "Hornsey & Wood Green Labour"
			inverted
			style = { {
				fontSize: props.mobile ? "1.5em" : "3em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: props.mobile ? "1.5em" : "2em",
			} }
		/>

		<Header
			as = "h2"
			content = "Offering a positive vision for Hornsey and Wood Green."
			inverted
			style = { {
				fontSize: props.mobile ? "1.5em" : "1.7em",
				fontWeight: "normal",
				marginTop: props.mobile ? "0.5em" : "1.5em",
			} }
		/>

		<Button
			as = { Link }
			size = "huge"
			href = "/whats-on/"
			style = { {
				marginTop: props.mobile ? "0.5em" : "1em",
			} }
		>
			What's On
		</Button>

		<Button
			as = { Link }
			size = "huge"
			href = "/new-members/"
			inverted
			style = { {
				marginTop: props.mobile ? "0.5em" : "1em",
			} }
		>
			New Members
		</Button>
	</Container>
);

HomepageHeading.propTypes = {
	mobile: PropTypes.bool,
};

export default HomepageHeading;
