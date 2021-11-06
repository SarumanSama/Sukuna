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

- 🄶🄴🄽🄴🅁🄰🄻

◍!google
◍!covid
◍!github
◍!profile
◍!hi
◍!owner
◍!support
◍!xp
◍!weather
◍!crypto
◍!admins
◍!sukuna
◍!bot/chat

- 🄼🄴🄳🄸🄰

◍!play
◍!yta
◍!ytv
◍!yts
◍!spotify
◍!karaoke
◍!lyrics
◍!rpaper
◍!subred
◍!sticker
◍!blur
◍!screenshot
◍!retrieve

- 🄰🄳🄼🄸🄽

◍!tagall
◍!purge
◍!promote
◍!demote
◍!remove
◍!open
◍!close
◍!revoke
◍!change (sub/desc)
◍!nsfw (act/deact)
◍!events (act/deact)
◍!mod (act/deact)

- 🄵🅄🄽

◍!ship
◍!quote
◍!fact
◍!hug
◍!pat
◍!kill
◍!kick
◍!dance
◍!joke
◍!trigger

- 🅆🄴🄴🄱

◍!waifu
◍!husbando
◍!loli
◍!neko
◍!animequote

- 🄷🄴🄽🅃🄰🄸

Cᴏᴍɪɴɢ Sᴏᴏɴ 🍑
<><><><><><><>

𝙎𝙤𝙤𝙤𝙤𝙤, 𝙈𝙮 𝙬𝙤𝙧𝙠 𝙞𝙨 𝙙𝙤𝙣𝙚. 𝘽𝙮𝙚! 𝘿𝙤𝙣'𝙩 𝙎𝙪𝙢𝙢𝙤𝙣 𝙈𝙚 𝘼𝙜𝙖𝙞𝙣(๑•﹏•)` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
