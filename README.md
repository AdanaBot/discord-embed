# Easy Embed Maker

🧡 An easy discord embed message maker for newbies, just a function, try it yourself!

## Installation
`$ npm install dann-embed`

* Discord.js v13

# Quick Example


```JavaScript
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Embed = require('dann-embed');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content === '!ping') {
    Embed(message).setSuccess("Pong!").send();
  }
});

client.login('token');
```

![Example](https://i.ibb.co/mhyXmPv/Example.png)

# Main Function

```JavaScript
const Embed = require('dann-embed');

Embed(message); // Class => MessageEmbed
```
### [Message Class](https://discord.js.org/#/docs/main/stable/class/Message)
## Class Functions

### .setText(text)
Set embed description.

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 

### .setError(text)
Set error message, with default red color of embed.

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 

### .setSuccess(text)
Set success message, with default green color of embed.

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 

### .send(channel)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| channel      | [GuildChannel](https://discord.js.org/#/docs/main/stable/class/GuildChannel)     | 🗸

## Join to us!

* 💚 [Util's package](https://www.npmjs.com/package/dann-util)
* 💜 [OnlyChill Discord Server](https://discord.gg/2kAxJW4rzK)