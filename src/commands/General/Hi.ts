import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Say hi to the bot.',
            category: 'general',
            usage: `${client.config.prefix}hi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna-hi.mp4'
        ]
        let kaoi = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: kaoi }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `☕ *Follow* SarumanSama  *☕*

🍃 *Github:* https://github.com/SarumanSama

🍒 *YouTube:* https://youtube.com/channel/UCoXVqyvcV6LrlWkhADBDhsg

🌺 *Email:* sarumansama69@gmail.com

🍏 *WhatsApp:* wa.me/` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
