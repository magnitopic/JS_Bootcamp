const product = {
	name: "Influence",
};

const product2 = new Object({
	name: "Influence",
});

// hasOwnProperty
console.log(product.hasOwnProperty("name"));
console.log("name" in product);

console.log(product2.name);
