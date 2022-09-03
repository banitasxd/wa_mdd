const fs = require('fs')

global.prefix = '.'
global.mode = 'publik'
global.packName = 'VANITAS'
global.authorName = 'Bot'
// global.thumb = fs.readFileSync('./thumb.jpeg')
global.ownerNumber = ['0', '21230215371', '21230215371', '21230215371']
global.thumbnailUrl = ['https://telegra.ph/file/ba640ed485bc67a4bbc5c.jpg', 'https://telegra.ph/file/ba640ed485bc67a4bbc5c.jpg', 'https://telegra.ph/file/ba640ed485bc67a4bbc5c.jpg']
// global.db = JSON.parse(fs.readFileSync('./db.json'))

global.APIs = {
	zeks: 'https://api.zeks.me/api',
	popcat: 'https://api.popcat.xyz',
	hardianto: 'https://hardianto.xyz/api',
	zacros: 'https://api.zacros-team.com',
	nrtm: 'https://nurutomo.herokuapp.com',
	hadi: 'http://hadi-api.herokuapp.com/api',
	megayaa: 'https://megayaa.herokuapp.com/api'
}
global.APIKeys = {
	'https://api.zeks.me/api': 'Nyarlathotep',
	'https://hardianto.xyz/api': 'hardianto'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`[UPDATE] '${__filename}'`)
	delete require.cache[file]
	require(file)
})