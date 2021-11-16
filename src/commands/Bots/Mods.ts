
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'Bots',
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna.mp4','/assets/videos/Sukuna/SukunaMods.mp4'
        ]
        let kaoi = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: kaoi }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `*🪶Sᴜᴋᴜɴᴀ Mᴏᴅᴇʀᴀᴛᴏʀs 🪶* \n

🦅→ SarumanSama
—> wa.me/94776264197

🦅→ Lord Rakesh
—> wa.me/8473956301

🦅→ Giga Chad
—> wa.me/666`
)


    }



}
