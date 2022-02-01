module.exports = {
	globDirectory: '/',
	globPatterns: [
		'**/*.{html,ico,woff2,png,jpg,svg,webp}'
	],
	swDest: '/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
