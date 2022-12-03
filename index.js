const { Client } = require("guilded.js");
require('dotenv').config()
//import { Client } from "guilded.js";
const client = new Client({ token: process.env.token })

client.on("ready", () => console.log(`Bot is successfully logged in`));
client.on("messageCreated", (message) => {
    if (message.content === "test") {
        return message.reply("test indeed");
    }
});

client.login();
//console.log(process.env.token)
