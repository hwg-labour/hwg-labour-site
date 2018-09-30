import React from "react";
import Link from "gatsby-link";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-1.jpg";

import { Button, div, Header, div, } from "../components/toolbox";

// ----------------------------------------------------

// ----------------------------------------------------

const NewMembers = () => (
	<Page banner = { banner }>
		<Block>
			<Block.Header>
				New Members
			</Block.Header>

			<Block.Content>
				<p>
					Welcome to the Hornsey and Wood Green Constituency Labour Party (HWGCLP).
				</p>

				<p>
					We are a friendly enthusiastic group of campaigners who form
					the largest CLP in the country. We will support you every
					step of the way if you are new to campaigning, make sure you
					are involved in the many social events that take place
					during the year and look forward to seeing you at our ward
					and general meetings.
				</p>
			</Block.Content>
		</Block>

		<Block>
			<Block.Header as ="h2">
				Join the Labour Party
			</Block.Header>

			<Block.Content>
				<p>
					If you're not yet a Labour member, you can join{" "}
					
					<a href = "https://join.labour.org.uk/">here</a>, to help us campaign for a fairer Britain.
				</p>

				<Button size = "huge" as = { "a" } to = "https://join.labour.org.uk/">
					Join now
				</Button>
			</Block.Content>
		</Block>

		<Block>
			<Block.Header as ="h2">
				Find your ward
				</Header>
			</Block.Header>

			<Block.Content>
				<p>
					Hornsey and Wood Green is divided into 10 wards. If you don't know which is your local ward, you can use the ward-finder tool below.
				</p>

				<Button
					size = "huge"
					as = { "a" }
					to = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward"
				>
					Find your ward
				</Button>
			</Block.Content>
		</Block>

		<Block>
			<Block.Header as ="h2">
				Campaign with us
			</Block.Header>

			<Block.Content>
				<p>
					The best way to get involved is by coming along to one of our campaign events!
				</p>

				<Button size = "huge" as = { Link } to = "/campaigning">
					Campaign with us
				</Button>
			</Block.Content>
		</Block>

		<Block>
			<Block.Header as ="h2">
				Social events
			</Block.Header>

			<Block.Content>
				<p>
					Getting involved with the Labour party is a great way of meeting like-minded, active local residents.
				</p>

				<Button size = "huge" as = { Link } to = "/whats-on">
					What's on
				</Button>
			</Block.Content>
		</Block>
	</Page>
);

export default NewMembers;
