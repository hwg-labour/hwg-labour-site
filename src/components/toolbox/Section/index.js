import { xs, sm, } from "codogo-utility-functions";

import styled from "styled-components";

// ---------------------------------

const Section = styled.div`
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

Section.Container = styled.div`
	display: flex;
	max-width: 700px;
`;

Section.Row = styled.div`
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

Section.Column = styled.div`
	display: flex;
	align-items: ${ props => (props.center ? "center" : "flex-start") };
	justify-content: ${ props => (props.center ? "center" : "flex-start") };
	flex-direction: column;
	flex: ${ props => props.size || "1" };
	max-width: 750px;
	padding: 3em;

	${ props => props.grow && `flex-grow: ${ props.size || "1" }` };
`;

export { Section, };
