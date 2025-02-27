const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let total =0, average=0;
    for(let phone of phones){
        total = total+ phone.price;
        average= parseInt(total/6);
    } 
    return average;

}

const Average = findAveragePhonePrice(phones);
console.log("Average is: ",Average);