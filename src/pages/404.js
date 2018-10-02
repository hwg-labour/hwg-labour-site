import { graphql, } from "graphql";
import { Page, Block, } from "hwg-labour-components";

import React from "react";

const NotFoundPage = () => (
	<Page>
		<Block>
			<Block.Header>NOT FOUND</Block.Header>
		
			<Block.Content>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</Block.Content>
		</Block>
	</Page>
);

export default NotFoundPage;
