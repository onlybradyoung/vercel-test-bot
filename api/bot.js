import { Bot, webhookCallback } from "grammy";
import "dotenv/config";

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("hello", async (ctx) => {
  await ctx.reply("Hi there!");
});

bot.command("bye", async (ctx) => {
  await ctx.reply("Bye Bye!");
});

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, "https");
