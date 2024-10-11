

 const electronics= [
    {name:'laptop', price:35000},
    {name:'tablet', price:15000},
    {name:'mobile', price:20000}
    ]

function calculateElectronicsBudget(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;   
}

const total = calculateElectronicsBudget(electronics);
console.log('Total price is: ',total);
