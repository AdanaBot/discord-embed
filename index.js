const { MessageEmbed } = require("discord.js");

class EmbedConstructor{
	constructor(msg, settings = {}) {
		this.user = msg.author;
		this.embed = new MessageEmbed().setAuthor((settings && settings.user && settings.user.username) || this.user.username, (settings && settings.user && settings.user.displayAvatarURL({dynamic: true})) || this.user.displayAvatarURL({dynamic: true}));
		this.msg = msg;
		this.settings = settings;
		this.embed.setColor("#00ff00");
	}

	color(color) {
		this.embed.setColor(color);
		return this;
	}


	author(text, icon) {
		if (text && typeof(text) === "string") {
			this.embed.setAuthor(text, icon);
			return this;
		} else {
			return this;
		}
	}

	text(text) {
		if (text && typeof(text) === "string") {
			this.embed.setDescription(text);
			return this;
		} else {
			return this;
		}
	}


	footer(text = "", icon = "") {
		if (text && typeof(text) === "string") {
			this.embed.setFooter(text, icon);
			return this;
		} else {
			return this;
		}
	}

	field(name, value, inline = false) {
		if (!name || typeof(name) !== "string") throw new Error("Field name must be a string");
		if (!value || typeof(value) !== "string") throw new Error("Field name must be a string");
		this.embed.addField(name, value, inline === true ? true : false);
		return this;
	}

	thumbnail(link) {
		if (!link || typeof(link) !== "string") throw new Error("Thumbnail link must be a string");
		this.embed.setThumbnail(link);
		return this;
	}

	image(link) {
		if (!link || typeof(link) !== "string") throw new Error("Image link must be a string");
		this.embed.setImage(link);
		return this;
	}

	send(channel) {
		if (channel && channel.type === "GUILD_TEXT") {
			channel.send({embeds: [this.embed]});
		} else {
			this.msg.channel.send({embeds: [this.embed]});
		}

	}
}

module.exports = function(msg) {
	if (!msg) throw new Error("Discord Message must be specified at creating a embed constructor");
	return new EmbedConstructor(msg);
}