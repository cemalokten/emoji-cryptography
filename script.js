const GraphemeSplitter = require('./node_modules/grapheme-splitter/index');

const splitter = new GraphemeSplitter();

const buttons = document.querySelectorAll('button');
const input = document.querySelector('.input');

const str = `1234567890-=qwertyuiop[]asdfghjkl;'#\zxcvbnm,./QWERTYUIOPASDFGHJKLZXCVBNM|<>?:@~{}!"£$%^&*()_+¬`;
const arr = str.split('');

// const emojiStr = `🌂🧵🧶☄️🧤👓🥼🦺👔👕🪓🚬🏺🧦🧿🍓🍤🦜`;
const emojiArr = splitter.splitGraphemes('🌷🎁💩😜👍🏳️‍🌈');

console.log(emojiArr[1]);

function encrypt(e) {
	console.log('clicked');
	const inputWords = input.value;
	const inputWordsArray = inputWords.split('');
	const encryptedArray = inputWordsArray.map((letter, index) => (letter = emojiArr[index]));
	console.log(encryptedArray.join(''));
}

buttons.forEach((button) => button.addEventListener('click', encrypt));
