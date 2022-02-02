module.exports = {
	globDirectory: '/',
	globPatterns: [
		'**/*.js'
	],
	swDest: '/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
