import Link from "gatsby-link";
import PropTypes from "prop-types";
import * as R from "ramda";
import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.div`
	position: relative;
`;

const StyledDropdownLink = styled(Link)`
	color: ${ props => props.theme.colors.link };
`;

const StyledDropdownAnchor = styled.a`
	color: ${ props => props.theme.colors.link };
`;

const DropdownLinks = styled.div`
`;

const LinkSwitch = ({as, to, content}) => {
	if(as === 'gatsby-link') {
		return <StyledDropdownLink
			to = { to }
			activeClassName = "active"
			exact
		>
			{ content }
		</StyledDropdownLink>
	}

	return <StyledDropdownAnchor
			href={to}
			activeClassName = "active"
		>
			{content}
		</StyledDropdownAnchor>
}

const Dropdown = ({ links, }) => (
	<DropdownLinks>
		{
			links.map((link, i) => (
				<LinkWrapper key={ `${i}-${link.to}` }>
					<LinkSwitch {...link}/>
				</LinkWrapper>
			))
		}
	</DropdownLinks>
);

Dropdown.propTypes = {
	links: PropTypes.array,
};

export default Dropdown;