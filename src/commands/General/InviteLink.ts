import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'invitelink',
            aliases: ['support', 'linkgc'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}invite`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        
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
     
            )
        }
    }
}
