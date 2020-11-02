const request = require('node-superfetch');

/**
 * A class for getting random stuff! 
 */
class Random {
	/**
	 * Get a random meme!
	 * @returns {Object}
	 */
	async getMeme() {
		const { body } = await request.get('https://meme-api.herokuapp.com/gimme');
		const content = {
			postLink: body.postLink,
			subreddit: body.subreddit,
			title: body.title,
			url: body.url,
			nsfw: body.nsfw,
			spoiler: body.spoiler,
			author: body.author,
			upvotes: body.ups
		};
		
		return content;
	}
}

module.exports = Random;