const fs = require('fs');
const { join } = require('path');
const uri = join(__dirname, './img1.jpg');
console.log(uri);

fs.readFile(join(__dirname, './img1.jpg'), (err, data) => {
	if (err) {
		console.log(`err readfile`, err);
	}
	console.log(data.toString('base64'));
	// let arrBuffer = new ArrayBuffer();
	// data.forEach((item, index) => {
	// 	console.log(item);
	// 	arrBuffer[index] = item;
	// });
	// console.log(arrBuffer.byteLength);
});
