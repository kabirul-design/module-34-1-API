const user = {
    id: 21, name : 'badsha', office : 'gulshan'
};
const jsonstring = JSON.stringify(user);

const shop = {
    name  : 'mr khalid hossain',
    Address : 'Dhaka',
    product : ['laptop', 'mobile', 'pepsi'],
    profit: 15000,
    owner : {
        name: 'Alia',
        Professional : 'actor',
    },
    isExpensive : false

};
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(shop);
console.log(shopStringified);
console.log('hello java');