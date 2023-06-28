import { Bot } from "grammy";
import "dotenv/config";

const bot = new Bot(process.env.BOT_TOKEN); // <-- Set your token in the vercel environment variable

console.log(bot.token);

bot.api.setWebhook(process.env.WEBHOOK);
