import React, { Component, } from "react";
import styled, { css, } from "styled-components";
import Link from "gatsby-link";

// ---------------------------------

const ButtonStyles = css`
	border-radius: 3px;
	cursor: pointer;
	padding: 0.5em 1.5em;
	margin: 0.25rem 0.5rem;

	${ props => props.fullWidth && "width: 100%" };
	${ props => props.center && "text-align: center" };

	&:hover {
		opacity: 0.7;
		text-decoration: none;
	}
`;

const BoldButton = styled.div`
	${ ButtonStyles };
	background-color: #fc5548;
	color: white;
	text-decoration: none;
	margin-top: 1.5em;

	${ props =>
		props.blocked &&
		`
		background-color: #999;
		cursor: default;
	` };
`;
const BoldButtonA = BoldButton.withComponent("a");
const BoldButtonLink = BoldButton.withComponent(Link);

const SubtleButton = styled.div`
	${ ButtonStyles };
	border: 1px solid #1f2631;
	color: #1f2631;
	margin: 0.5em 0;

	${ props =>
		props.blocked &&
		`
		border: 1px solid #999;
		color: #999;
		cursor: default;
	` };
`;
const SubtleButtonA = SubtleButton.withComponent("a");
const SubtleButtonLink = SubtleButton.withComponent(Link);

// ---------------------------------

const ButtonMap = {
	subtle: {
		div: SubtleButton,
		a: SubtleButtonA,
		"gatsby-link": SubtleButtonLink,
	},
	bold: {
		div: BoldButton,
		a: BoldButtonA,
		"gatsby-link": BoldButtonLink,
	},
};

// ---------------------------------

export class Button extends Component {
	render() {
		const {
			as = "a",
			content,
			onClick,
			subtle,
			to,
			fullWidth,
			center,
			blocked,
		} = this.props;

		const ButtonWrapper = subtle
			? ButtonMap["subtle"][as]
			: ButtonMap["bold"][as];

		return (
			<ButtonWrapper
				onClick = { onClick }
				to = { to }
				href = { to }
				subtle = { subtle }
				fullWidth = { fullWidth }
				center = { center }
				blocked = { blocked }
			>
				{content}
			</ButtonWrapper>
		);
	}
}
