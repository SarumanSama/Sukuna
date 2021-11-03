import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'sukuna',
            description: 'Displays the info',
            category: 'bots',
            usage: `${client.config.prefix}sukuna`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `━━━❪ SUKUNA ❫━━━

📮 Q1: What kind of bot Sukuna is?
📑 A: Sukuna is a simple anime themed What's app Bot Written in Typescript to help everyone in day to day life
• ────── ✾ ────── •

📮 Q2: How to add Sukuna in my group
📑 A: Type !owner then send your grouplink to any of the moderators
• ────── ✾ ────── •

📮 Q3: Why doesn't the bot doesn't respond in my group?
📑 A: During peak hours the bot may become slow due to traffic. If the bot doesn't respond for 12 hours or more, then the bot is probably banned from WhatsApp
• ────── ✾ ────── •

🪵 *Advice To Group Admin :*
🐣 Make the bot admin of your group to access admin commands and better experience.
• ────── ✾ ────── • \n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
