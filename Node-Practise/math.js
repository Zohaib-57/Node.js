function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}

// module.exports = add;
// module.exports = sub;

//preferred way
module.exports = {
	add,
	sub,
};

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
