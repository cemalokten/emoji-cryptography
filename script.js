const GraphemeSplitter = require('./node_modules/grapheme-splitter/index');

const splitter = new GraphemeSplitter();

const buttons = document.querySelectorAll('button');
const input = document.querySelector('.input');

const str = `1234567890-=qwertyuiop[]asdfghjkl;'#\zxcvbnm,./QWERTYUIOPASDFGHJKLZXCVBNM|<>?:@~{}!"Β£$%^&*()_+Β¬`;
const arr = str.split('');

// const emojiStr = `ππ§΅π§ΆβοΈπ§€ππ₯Όπ¦Ίπππͺπ¬πΊπ§¦π§Ώππ€π¦`;
const emojiArr = splitter.splitGraphemes('π·ππ©πππ³οΈβπ');

console.table(emojiArr[1]);

function encrypt(e) {
	console.log('clicked');
	const inputWords = input.value;
	const inputWordsArray = inputWords.split('');
	const encryptedArray = inputWordsArray.map((letter, index) => (letter = emojiArr[index]));
	console.log(encryptedArray.join(''));
}

buttons.forEach((button) => button.addEventListener('click', encrypt));
