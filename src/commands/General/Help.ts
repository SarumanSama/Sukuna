import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Say hi to the bot.',
            category: 'general',
            usage: `${client.config.prefix}help`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna.mp4'
        ]
        let kaoi = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: kaoi }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Konnichiwa! *${M.sender.username}*, *I'm Sukuna!* Know your place Fool.

My perfix - !

- ๐ถ๐ด๐ฝ๐ด๐๐ฐ๐ป

โ!google
โ!covid
โ!github
โ!profile
โ!hi
โ!owner
โ!saruman
โ!support
โ!xp
โ!weather
โ!crypto
โ!admins
โ!sukuna
โ!bot/chat

- ๐ผ๐ด๐ณ๐ธ๐ฐ

โ!play
โ!yta
โ!ytv
โ!yts
โ!spotify
โ!karaoke
โ!lyrics
โ!rpaper
โ!subred
โ!sticker
โ!blur
โ!screenshot
โ!retrieve

- ๐ฐ๐ณ๐ผ๐ธ๐ฝ

โ!tagall
โ!purge
โ!promote
โ!demote
โ!remove
โ!open
โ!close
โ!revoke
โ!change (sub/desc)
โ!nsfw (act/deact)
โ!events (act/deact)
โ!mod (act/deact)

- ๐ต๐๐ฝ

โ!ship
โ!quote
โ!fact
โ!hug
โ!pat
โ!kill
โ!kick
โ!dance
โ!joke
โ!trigger

- ๐๐ด๐ด๐ฑ

โ!waifu
โ!husbando
โ!loli
โ!neko
โ!animequote

- ๐ท๐ด๐ฝ๐๐ฐ๐ธ

Cแดแดษชษดษข Sแดแดษด ๐
<><><><><><><>

๐๐ค๐ค๐ค๐ค๐ค, ๐๐ฎ ๐ฌ๐ค๐ง๐  ๐๐จ ๐๐ค๐ฃ๐. ๐ฝ๐ฎ๐! ๐ฟ๐ค๐ฃ'๐ฉ ๐๐ช๐ข๐ข๐ค๐ฃ ๐๐ ๐ผ๐๐๐๐ฃ(เนโข๏นโข)` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
