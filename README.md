# Easy Embed Maker

🧡 An easy discord embed message maker for newbies, just a function, try it yourself!

## Installation
> $ npm install dann-embed

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
    Embed(message).description("Pong!").send();
  }
});

client.login('token');
```

![Example](https://i.ibb.co/mhyXmPv/Example.png)

# Main Function

```JavaScript
const Embed = require('dann-embed');

Embed(message); // Object => {embed: MessageEmbedClass}
```
### [Message Class](https://discord.js.org/#/docs/main/stable/class/Message)
## Class Functions
### .author(name, iconUrl)

| PARAMETER  | TYPE | OPTIONAL
| ------------- |:-------------:|:------:|
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |
| iconUrl      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 🗸

### .title(name)

| PARAMETER  | TYPE | OPTIONAL
| ------------- |:-------------:|:-----:|
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |

### .field(name, value, inline)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-----------:|
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 
| value      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |
| inline     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     |🗸

### .description(text)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:------:|
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 

### .color(hexColor)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:---------:|
| hexColor      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |  

### .time(timestamp)

| PARAMETER  | TYPE | OPTIONAL
| ------------- |:-------------:|:----:|
| timestamp      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)      | 🗸

### .thumbnail(imageLink)

| PARAMETER  | TYPE | OPTIONAL|
| ------------- |:-------------:|:-------------:|
| imageLink      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |

### .image(imageLink)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| imageLink      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |

### .footer(name, iconUrl)

| PARAMETER  | TYPE |  OPTIONAL |
| ------------- |:-------------:|:-------------:|
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |  
| iconUrl      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 🗸

### .send(channel)

| PARAMETER  | TYPE | OPTIONAL |
| ------------- |:-------------:|:-------------:|
| channel      | [GuildChannel](https://discord.js.org/#/docs/main/stable/class/GuildChannel)     | 🗸

## Join to us!

💜 [OnlyChill Discord Server](https://discord.gg/2kAxJW4rzK)