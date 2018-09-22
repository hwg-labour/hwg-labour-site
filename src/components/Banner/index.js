import { Button, H1, H2, Image, } from "../toolbox";

import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import banner from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";
import banner4 from "../../images/banner-4.jpg";
import banner5 from "../../images/banner-5.jpg";
import banner6 from "../../images/banner-1.jpg"; // To increase the chance of the best looking banner
import banner7 from "../../images/banner-1.jpg";
import banner8 from "../../images/banner-1.jpg";

// ----------------------------------------------------

const BannerArray = [
	banner,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
	banner8,
];

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

const BannerRandomiser = () => {
	var i = Math.floor(Math.random() * BannerArray.length);
	return BannerArray[i];
};

// ----------------------------------------------------

const Banner = props => (
	<BannerWrapper>
		{!props.mobile && <BannerImage src = { BannerRandomiser() } />}

		<BannerContent text>
			<H1>Hornsey & Wood Green Labour</H1>

			<H2>Offering a positive vision for Hornsey and Wood Green.</H2>

			<Button
				as = { Link }
				size = "huge"
				to = "/whats-on/"

			>
				What's On
			</Button>

			<Button
				as = { Link }
				size = "huge"
				to = "/new-members/"
				inverted
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
