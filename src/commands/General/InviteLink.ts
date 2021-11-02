import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support', 'sgc'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // check if Bot is the admin
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`I'm not an admin of this group.`)
        if ((await this.client.getGroupData(M.from)).invitelink) {
            const code = await this.client.groupInviteCode(M.from).catch(() => {
                return void M.reply('Could not get the invite link')
            })
            await this.client.sendMessage(
                M.sender.jid,
                `*JOIN SUKUNA'S SUPPORT GROUP ✨*

• *1) Fᴏʟʟᴏᴡ Tʜᴇ Gʀᴏᴜᴘ Rᴜʟᴇs*

• *2) Fᴏʟʟᴏᴡ Tʜᴇ Aᴅᴍɪɴs*

• *3) Dᴏɴᴛ Mɪssʙᴇʜᴀᴠᴇ Wɪᴛʜ Aɴʏ Mᴇᴍʙᴇʀs*

*🧣 Tittle: NoFaceWeebs*

*✉ Invite:* https://chat.whatsapp.com/JSpzoZ2bwCa13318uGCaLe`,
                MessageType.text
            )
            return void M.reply('Sent you a personal message regarding this')
        } else {
            return void M.reply(
                `Command not enabled by the admin.\nUse *${this.client.config.prefix}act invitelink* to enable it`
            )
        }
    }
}
