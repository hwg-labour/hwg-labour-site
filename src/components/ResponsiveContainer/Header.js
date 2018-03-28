import React from "react";
import Link from "gatsby-link";
import slugify from "slugify";

import { Nav, } from "codogo-nav";

import Logo from "./Logo";

import {
	Button,
} from "semantic-ui-react";

// ----------------------------------------------------

const GetInvolvedDropdown = () => (<div>
	<Link
		to = "/new-members/"
		className = "ui"
	>
		New Members
	</Link>

	<Link
		to = "/whats-on/"
		className = "ui"
	>
		What's On
	</Link>

	<Link
		to = "/campaigning/"
		className = "ui"
	>
		Campaigning
	</Link>

	<Link
		to = "/volunteering/"
		className = "ui"
	>
		Volunteering
	</Link>

	<a
		href = "https://donation.labour.org.uk/page/contribute/donate-fa/"
		className = "ui"
	>
		Donate
	</a>
</div>);

const PeopleDropdown = () => (
	<div>
		<Link to = "/mp/" className = "ui">
			Catherine West MP
		</Link>

		<Link to = "/am/" className = "ui">
			Joanne McCartney AM
		</Link>

		<Link to = "/mayor/" className = "ui">
			Your Mayor
		</Link>

		<Link
			to = "/councillors/"
			className = "ui"
		>
			Councillor Candidates
		</Link>
	</div>
);

const GroupsDropdown = () => (
	<div>
		{
			props.wards.edges.sort( (x, y) => { return x.node.name.toUpperCase() < y.node.name.toUpperCase() ? -1 : 1 } ).map(ward => (
				<Link
					to = { `/wards/${ slugify(
						ward.node.name,
						{ lower: true, },
					) }` }
					className = "ui"
					key = { ward.node.id + "-dropdown" }
				>
					{ ward.node.name }
				</Link>
			))
		}

		<a
			href = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward"
			className = "ui"
		>
			Find your ward
		</a>
	</div>
);

// ----------------------------------------------------

const Header = props => (
	<Nav
		logo = { <Logo /> }
		fontSize = { { xs: "1.1em", other: "0.8em", } }
		textTransform = { { xs: "capitalize", other: "capitalize", } }
		color = { { xs: "white", other: "white", } }
		clear
	>
		<Link
			to = "/new-members/"
			className = "ui"
			data-dropdown = { GetInvolvedDropdown }
		>
			Get Involved
		</Link>

		<Link
			to = "/new-members/"
			className = "ui"
			data-dropdown = { GroupsDropdown }
		>
			Groups
		</Link>
		
		<Link
			to = "/people/"
			className = "ui"
			data-dropdown = { PeopleDropdown }
		>
			People
		</Link>

		<Link
			to = "/news/"
			children = "News"
		/>

		<a
			href = "https://medium.com/hornsey-and-wood-green-labour"
			children = "Thoughts"
		/>

		<Link
			to = "/contact-us/"
			children = "Contact Us"
		/>

		<Button
			as = "a"
			inverted = { true }
			style = { { marginLeft: "0.5em", } }
			href = "https://join.labour.org.uk/"
		>
			Donate
		</Button>

		<Button
			as = "a"
			inverted = { true }
			style = { { marginLeft: "0.5em", } }
			href = "https://join.labour.org.uk/"
		>
			Join
		</Button>
	</Nav>
);

export default Header;