module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `j8b2h64cwsnc`,
				accessToken: `436c7978b66fd59e69bce0c8e9b14e106713d17939960d08e96ed4525a8ede09`,
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/images/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	],
};
