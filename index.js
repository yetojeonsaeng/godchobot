const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, Discord, MessageEmbed, Partials, message, channel } = require('discord.js');
const { token } = require('./config.json');
const prefix = '갓초님';
const prefix2 = '갓초야';

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const helpEmbed = new EmbedBuilder()
    .setColor(0x66ffff)
    .setTitle('도움말')
    .setDescription(
        '접두사 : 갓초야 OR 갓초님\n\n'
        +
        '도움 : 접두사 + help\n\n'
        +
        '매도 : 접두사 + 매도\n\n'
        +
        '심심해요 : 갓초님 + 심심해요 OR 갓초야 + 심심해요\n\n'
        +
        '기능 추가 문의는 디스코드 아이디 : yetojeonsaeng\n\n'
    )

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});


client.on('messageCreate', msg => {
    if (msg.content === prefix + '' || msg.content === prefix2 + '') {
        msg.reply('뭐');
    }

    if (msg.content === prefix + '!' || msg.content === prefix2 + '!') {
        msg.reply('어쩌라고');
    }

    if (msg.content === prefix + ' help' || msg.content === prefix2 + ' help') {
        msg.reply('이런');
        msg.reply('것까지');
        msg.reply('내가');
        msg.reply('알려줘야해?');
        msg.channel.send({ embeds: [helpEmbed] });
    }

    if (msg.content === prefix + ' 매도' || msg.content === prefix2 + ' 매도') {
        let random = Math.round(Math.random() * 5)
        console.log(random);

        if (random == 1) {
            msg.reply('진짜 왜 사냐?');
        } else if (random == 2) {
            msg.reply('허접');
        } else if (random == 3) {
            msg.reply('씹찐따');
        } else if (random == 4) {
            msg.reply('수듄');
        } else {
            msg.reply('이것도 못해?');
        }
    }

    if (msg.content === prefix + ' 심심해요' || msg.content === prefix2 + ' 심심해') {
        msg.reply('나도');
    }


});

client.login(token);
