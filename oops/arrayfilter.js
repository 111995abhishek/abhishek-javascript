var products = ['tulsi','arka','doopam'];

var filteredProducts2=products.filter(function(item){
    return item.toLowerCase().includes('tulsi')
}); 

console.log(filteredProducts2);

var filteredProducts3 = products.filter(item =>item.toLowerCase().includes('tulsi'));
console.log(filteredProducts3);