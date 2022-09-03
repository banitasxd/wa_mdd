exports.menu = (clockString) => {
	let tanggal = new Date().toLocaleString('id', { dateStyle: 'full' })
	let waktu = new Date().getHours()
	waktu = waktu > 2 && waktu < 4 ? 'Dini Hari' : waktu < 11 ? 'Pagi' : waktu < 16 ? 'Siang' : waktu < 19 ? 'Sore' : 'Malam'
	let time = new Date().toLocaleString('id', { timeStyle: 'long' })
	return `
*INFO*
• vanitas bot
• ig vanitasx_d

*GAME*
• ${prefix}susunkata
• ${prefix}tebakkata
• ${prefix}tebakgambar

*RANDOM IMAGE*
• ${prefix}neko
• ${prefix}waifu

*CONVERTER*
• ${prefix}toimg <reply>
• ${prefix}tourl <caption / reply>
• ${prefix}stiker <caption / reply / url> [-crop]

*DOWNLOADER*
• ${prefix}igdl <url>
• ${prefix}ytmp3 <url>
• ${prefix}ytmp4 <url>
• ${prefix}play <query>
• ${prefix}pixiv <id / url>
• ${prefix}stickertele <url>
• ${prefix}twitter <url> [-hd]
• ${prefix}tiktok <url> [-mp3]
• ${prefix}nhentaipdf <code>
• ${prefix}pinterest <query / url>
• ${prefix}soundcloud <query / url>

*MAKER*
• ${prefix}kannagen <teks>
• ${prefix}trumptweet <teks>
• ${prefix}memegen <teks|teks>

*SEARCH*
• ${prefix}google <query>
• ${prefix}ytsearch <query>
• ${prefix}whatmusic <caption / reply>

*GROUP*
• ${prefix}link
• ${prefix}leave
• ${prefix}revoke
• ${prefix}tagall [teks]
• ${prefix}hidetag [teks]
• ${prefix}group [option]
• ${prefix}demote <@tag / reply>
• ${prefix}promote <@tag /reply>
• ${prefix}setppgrup <caption / reply / url>

*OWNER*
• $
• > / >>
• ${prefix}self
• ${prefix}public
• ${prefix}restart
• ${prefix}join <url>
• ${prefix}setprefix [prefix]
• ${prefix}setppbot <caption / reply / url>

*MISC*
• cekprefix
• ${prefix}ping
• ${prefix}runtime
• ${prefix}listgroup
• ${prefix}get <url>
• ${prefix}ssweb <url>
• ${prefix}delete <reply>
`.trim()
}

exports.tos = (prefix) => {
	return `
	Guide:
	Command format
	< > is mandatory to fill in/do
	[ ] is an additional query, otherwise the bot will assume the default choice
	( ) did not enter the command, just information
	
	Example of full command:
	${prefix}tiktok رابط -mp3
	Typical command example:
	${prefix}tiktok رابط
	
	reply: reply something then type command
	caption: upload media with caption command
	url: link you want to execute
	query: parameters. such as the pinterest query is what image you want to find
	
	Constraint? contact the owner.
`.trim()
}

exports.mess = {
	wait: 'إنتضر...',
	group: 'لا يمكن استخدام هذا الأمر إلا داخل المجموعات!',
	admin: 'لا يمكن استخدام هذا الأمر إلا بواسطة مسؤول المجموعة!',
	botAdmin: 'لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مسؤولاً!',
	owner: 'لا يمكن استخدام هذا الأمر إلا من قبل المالك فانيتاس!'
}
