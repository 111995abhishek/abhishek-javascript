const fetch = require("node-fetch");
fetch('https://myjsons1.web.app/products1.json')
.then(response=>response.json()).then((abhi)=>console.log(abhi));