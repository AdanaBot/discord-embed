const { MessageEmbed } = require("discord.js");

const colors = {
	red: "#ff0000",
    green: "#00ff00",
    none: "#2f3136"
};

class EmbedConstructor extends MessageEmbed {
	constructor(msg) {
		super();
		this.msg = msg;
		this.base();
	}

	setText(description = "") {
        this.setDescription(description);
        return this;
    }
    setSuccess(description = "") {
        this.setDescription(description);
        this.setColor(colors.green);
        return this;
    }
    setError(description = "") {
        this.setDescription(description);
        this.setColor(colors.red);
        return this;
    }
    send(channel = this.msg.channel) {
        return channel.send({ embeds: [this] });
    }
    base() {
        this.setAuthor(this.msg.author.username, this.msg.author.displayAvatarURL({ dynamic: true }));
        this.setColor(colors.none);
        return this;
    }

}

module.exports = function(msg) {
	if (!msg) throw new Error("Discord Message must be specified at creating a embed constructor");
	return new EmbedConstructor(msg);
}