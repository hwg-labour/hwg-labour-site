import React from "react";

import { div, Header, div, Button, } from "../components/toolbox";

// ----------------------------------------------------

// ----------------------------------------------------

const AM = () => (
	<Page>
		<Section>
			<Section.Container>
				<Section.Row>
					<Section.Column>
						<h3>Your local Assembley Member</h3>

						<h1>Joanne McCartney</h1>

						<p>
							As the local Assembly Member, Joanne represents Enfield and
							Haringey constituents on local issues and holds the Mayor to
							account along with fellow Assembly Members, working hard to
							ensure local voices are heard in City Hall. She currently
							sits on the Economy and Transport committees at the London
							Assembly.
						</p>
					</Section.Column>
				</Section.Row>

				<Section.Row>
					<Section.Column>
						<p>
							Joanne was appointed Deputy Mayor for London in May 2016 by
							Mayor Sadiq Khan and has been re-elected to the London
							Assembly Member for Enfield & Haringey for the forth time,
							increasing her majority from 1,400 in 2004 to 51,000 in
							2016.
						</p>

						<p>
							Before being elected to the London Assembly Joanne served as
							a Councillor in Enfield between 1998-2006, and previously
							Chaired the Enfield Early Years development and Childcare
							Partnership and been the Director of Millfield Community
							Theatre in Edmonton.
						</p>

						<p>
							Joanne is a barrister by profession and have specialised in
							employment law, and has also worked as an adjudicator for
							the Housing Ombudsman dealing with disputes between
							landlords and tenants.
						</p>

						<Button
							as = "a"
							size = "large"
							href = "https://joannemccartney.co.uk/"
						>
							Find out more
						</Button>
					</Section.Column>
				</Section.Row>
			</Section.Container>
		</Section>

		<Block>
			<Block.Header>
				Contact Joanne
			</Block.Header>

			<Block.Content>
				<p>
					Please include your full address, postcode and name in any
					communications with Joanne, or she will be unable to take up
					your case.
				</p>

				<p>
					<b>Email</b>:{" "}
					
					<a href = "mailto:joanne.mccartney@london.gov.uk">
						joanne.mccartney@london.gov.uk
					</a>
				</p>

				<p>
					<b>Phone</b>: <a href = "tel:+442079835524">020 7983 5524</a>{" "}
				</p>

				<p>
					<b>Post</b>: Joanne McCartney AM, City Hall, Queen’s Walk,
					London SE1 2AA
				</p>

				<p>
					<b>Twitter</b>:{" "}
					<a href = "https://twitter.com/JoanneMcCartney">
						@JoanneMcCartney
					</a>
				</p>
			</Block.Content>
		</Block>
	</Page>
);

export default AM;
