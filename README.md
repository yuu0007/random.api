# random.api

# Installation
`npm i @yuu0007/random.api`

## Example
```js
const { Random } = require('@yuu0007/random.api');
const random = new Random();

async function meme() {
	const content = await random.getMeme();
	console.log(content);
	/*
	* This returns:
	* {
	*	postLink: "https://redd.it/jgymyb",
	*	subreddit: "dankmemes",
	*	title: "And I’m a teacher lol",
	*	url: "https://i.redd.it/bgt6td6wlxu51.jpg",
	*	nsfw: false,
	*	spoiler: false,
	*	author: "Walrus909",
	*	upvotes: 14257
	* }
	*/
}
```

## Available Endpoints
- getMeme()
This returns:
```js
{
	postLink: "https://redd.it/jgymyb",
	subreddit: "dankmemes",
	title: "And I’m a teacher lol",
	url: "https://i.redd.it/bgt6td6wlxu51.jpg",
	nsfw: false,
	spoiler: false,
	author: "Walrus909",
	upvotes: 14257
}
```