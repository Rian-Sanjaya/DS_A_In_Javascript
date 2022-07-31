str = 'kodokk'

function count_char(str) {
	let obj = {}
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = (obj[str[i]] || 0) + 1;
	}
	return obj
}

const result = count_char(str)

const keys = Object.keys(result);

for (let k of keys) {
	console.log(`${k}: ${result[k]}`)
}
