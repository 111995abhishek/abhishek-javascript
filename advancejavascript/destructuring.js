let naturalNums=(size)=>{
    let array = new Array(size);
    for(let i=0;i<array.length;i++)
        array[i]=i+1;
    return array;
}

    

    let [a,b,c] = naturalNums(10);

    console.log(a);
    console.log(b);
    console.log(c);