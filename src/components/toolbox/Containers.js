import { xs, sm, } from "codogo-utility-functions";

import styled from "styled-components";

// ---------------------------------

// Content container
export const PageWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

// Main content container
export const Container = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: 100px;
`;

// Full height container
export const Full = styled(Container)`
	width: 100vw;
	height: 100vh;

	${ props =>
		props.backgroundColor && `background-color: ${ props.backgroundColor }` };
`;

// ---------------------------------

//
export const SectionWrapper = styled.div`
	width: 100%;
	background-color: white;

	&:nth-child(2n) {
		background-color: #f1f6f9;
	}
`;

export const Section = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	overflow: hidden;
	${ props => props.top && "margin-top: 70px" };

	&:first-child {
		padding: 3em;
	}
`;

// ---------------------------------

export const Row = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-wrap: ${ props => (props.nowrap ? "nowrap" : "wrap") };
	justify-content: center;
	max-width: 1000px;
	padding: 1em;
	width: 100%;

	&:first-child {
		padding-top: 3em;
	}

	&:last-child {
		padding-bottom: 3em;
	}

	${ xs`
		flex-direction: column;
	` };

	${ sm`
		flex-wrap: wrap;
	` };
`;

// ---------------------------------

export const Column = styled.div`
	display: flex;
	align-items: ${ props => (props.center ? "center" : "flex-start") };
	justify-content: ${ props => (props.center ? "center" : "flex-start") };
	flex-direction: column;
	flex: ${ props => props.size || "1" };
	max-width: 750px;
	padding: 3em;

	${ props => props.grow && `flex-grow: ${ props.size || "1" }` };
`;
