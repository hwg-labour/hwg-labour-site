import styled from "styled-components";

import { 
	Button as _Button,
	Container as _Container,
	Divider as _Divider,
	Grid as _Grid,
	Header as _Header,
	Icon as _Icon,
	Image as _Image,
	List as _List,
	Segment as _Segment, 
} from "semantic-ui-react";

const Button = styled(_Button)`
	background: #eee;
	padding: 0.5em 1em;
	margin: 0.25em .5em;
`;

const Container = styled(_Container)`
	max-width: 700px;
	padding: 1.5em;
	margin: 1.5em auto;
`;

const Divider = styled(_Divider)`

`;

const Grid = styled(_Grid)`

`;

const Header = styled(_Header)`
	margin-top: 0;
`;

const Icon = styled(_Icon)`

`;

const Image = styled(_Image)`

`;

const List = styled(_List)`

`;

const Segment = styled(_Segment)`
	border-bottom: 1px solid #ccc;

	&nth-child(2) {
		background-color: #eee;
	}
`;

export { 
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Segment,
};