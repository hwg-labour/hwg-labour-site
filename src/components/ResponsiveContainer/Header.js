import React from "react";
import Link from "gatsby-link";
import slugify from "slugify";

import { Nav, } from "codogo-nav";

import Logo from "./Logo";

import { Button, } from "semantic-ui-react";

// ----------------------------------------------------

const GetInvolvedDropdown = [
	{ 
		to: "/new-members/",
		content: "New Members",
		as: Link, 
	},
	{ 
		to: "/whats-on/",
		content: "What's On",
		as: Link, 
	},
	{ 
		to: "/campaigning/",
		content: "Campaigning",
		as: Link, 
	},
	{ 
		to: "/volunteering/",
		content: "Volunteering",
		as: Link, 
	},
	{ 
		to: "/contact-us/",
		content: "Contact Us",
		as: Link, 
	},
	{ 
		to: "https://donation.labour.org.uk/page/contribute/donate-fa/",
		content: "Donate",
		as: "a",
	},
	{ 
		to: "https://join.labour.org.uk/",
		content: "Join",
		as: "a",
	},
];

const PeopleDropdown = [
	{
		to: "/mp/",
		content: "Catherine West MP",
		as: Link,
	},
	{
		to: "/am/",
		content: "Joanne McCartney AM",
		as: Link,
	},
	{
		to: "/mayor/",
		content: "Your Mayor",
		as: Link,
	},
	{
		to: "/councillors/",
		content: "Councillor Candidates",
		as: Link,
	},
];

const GroupsDropdown = ({ edges, }) => edges.sort((x, y) => {
		return x.node.name.toUpperCase() < y.node.name.toUpperCase()
			? -1
			: 1;
	})
	.map(
		group => {
			return {
				to: `/groups/${ slugify(group.node.name, {
					lower: true,
				}) }`,
				content: group.node.name,
				as: Link,
			}
		} 
	) 
;

const WardsDropdown = ({ edges, }) => edges.sort((x, y) => {
		return x.node.name.toUpperCase() < y.node.name.toUpperCase()
			? -1
			: 1;
	})
	.map(
		ward => {
			return {
				to: `/wards/${ slugify(ward.node.name, {
					lower: true,
				}) }`,
				content: ward.node.name,
				as: Link,
			}
		} 
	)
;

// ----------------------------------------------------

const Header = props => (
	<Nav
		logo = { <Logo /> }
		fontSize = { { xs: "1.1em", other: "0.9em", } }
		textTransform = { { xs: "capitalize", other: "capitalize", } }
		color = { { xs: "white", other: "white", } }
		backgroundColor = { { xs: "#D9292F", other: "#D9292F", } }
		highlightColor = { { xs: "#fff", other: "#ddd", } }
		clear = { props.homepage ? true : false }
		fixed = { props.homepage ? false : true }
	>
		<Link
			to = "/new-members/"
			dropdown = { GetInvolvedDropdown  }
		>
			Get Involved
		</Link>

		<Link
			to = "/wards/"
			dropdown = { [
				...WardsDropdown(props.wards),
				{ 
					to: "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward",
					content: "Find your ward",
					as: "a",
				},
			] }
		>
			Wards
		</Link>

		<Link
			to = "/groups/"
			dropdown = { GroupsDropdown(props.groups) }
		>
			Forums & Groups
		</Link>

		<Link to = "/councillors/" className = "ui" dropdown = { PeopleDropdown }>
			People
		</Link>

		<Link to = "/news/" children = "News" />

		<a
			href = "https://medium.com/hornsey-and-wood-green-labour"
			children = "Thoughts"
		/>

		<Button
			as = "a"
			inverted = { true }
			style = { { marginLeft: "0.5em", textDecoration: "none", } }
			href = "https://donate.labour.org.uk/hornsey_wood_green/1"
		>
			Donate
		</Button>

		<Button
			as = "a"
			inverted = { true }
			style = { { marginLeft: "0.5em", textDecoration: "none", } }
			href = "https://join.labour.org.uk/"
		>
			Join
		</Button>
	</Nav>
);

export default Header;
