import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

import banner from "../../images/banner-1.jpg";

import { Button, Container, Header, Image, Link, } from "semantic-ui-react";

// ----------------------------------------------------

const BannerImage = styled(Image)`
	position: absolute !important;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;

const BannerWrapper = styled.div`
	position: relative;
`;

const BannerContent = styled.div`
	padding: ${ props => (props.mobile ? "6em" : "10em") } 0;
	text-align: center;
	background-color: rgba(136, 23, 27, 0.5);
	max-width: 100% !important;
	width: 100% !important;
`;

// ----------------------------------------------------

const Banner = props => (
	<BannerWrapper>
		{!props.mobile && <BannerImage src = { banner } />}

		<BannerContent text>
			<Header
				as = "h1"
				content = "Hornsey & Wood Green Labour"
				inverted
				style = { {
					fontSize: props.mobile ? "1.5em" : "3em",
					fontWeight: "normal",
					marginBottom: 0,
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
		</BannerContent>
	</BannerWrapper>
);

Banner.propTypes = {
	mobile: PropTypes.bool,
};

export default Banner;
