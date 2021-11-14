import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'saruman',
            description: 'Displays info of SarumanSama.',
            category: 'general',
            usage: `${client.config.prefix}saruman`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/SarumanSama.mp4'
        ]
        let kaoi = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: kaoi }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `☕ *Follow* ```SarumanSama```  *☕*

🍃 *Github:* https://github.com/SarumanSama

🍒 *YouTube:* https://youtube.com/channel/UCoXVqyvcV6LrlWkhADBDhsg

🌺 *Email:* sarumansama69@gmail.com

🍏 *WhatsApp:* wa.me/` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
