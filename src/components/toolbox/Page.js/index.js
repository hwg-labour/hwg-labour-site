import { Section, getChildrenByType } from '../toolbox';

import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {
	return (
		<Page>
			{props.children}
		</Page>
	);
};

Block.Header = Header
Block.Content = Content

Block.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export { Block, };