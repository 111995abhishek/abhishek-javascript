//filter method
var products = ['Tulsi','Cow dung cake','Doopam','Panchagavya','Desi cow ghee'];
console.log(products);

var filteredProducts = [];
for(var item of products){
    if(item.toLowerCase().includes('cow'))
        filteredProducts.push(item);
}

console.log(filteredProducts);

var filteredProducts2 = products.filter(function(item){
    return item.toLowerCase().includes('cow');
});

console.log(filteredProducts2);

var  filteredProducts3 = products.filter(item => item.toLowerCase().includes('cow'));
console.log(filteredProducts3);
