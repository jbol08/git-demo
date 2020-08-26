// // const add = function(x,y){
// //     return x + y
// // }
// // // these 2 do the same thing
// // const add = (x,y) => {
// //     return x + y;
// // }

// [2,3,6,78,99,104,23].reduce((max,currNum) =>{
//     return Math.max(max,currNum);
// })

// // ***************************
// //  arrow function shortcuts
// // ***************************

// //no parenth when 1 parameter...i wont do this
// [1,2,3,4,5].array.forEach(n => {
//     console.log(n * 10);
// });

// /* no {} created an implied return so don't have to use return. only works
//  if a single expression in the body of your function otherwise js gets 
//  confused */
// [1,2,3,4,5,6].filter((num) =>  num % 2 === 0);

// const double = (n) => n * 2;


// //all still one param for each part. 1 param for map, 1 for reduce.
// const dailyRainTotals = [
//     [1.2,4,6],
//     [1.7,1,8],
//     [9,15,12]
// ];
// dailyRainTotals.map((hourlyRainTotals) =>(
//     hourlyRainTotals.reduce((sum,inchesofRain) => sum + inchesofRain)
// ));
// // ***************************
// //  arrow function gotchas
// // ***************************

// const doMath = (num) => {
//     return{
//         square: num * num,
//         double: num * 2
//     }
// }
// //new area//

// function makeFamily(parent1,parent2,...kids){
//     return {
//         parents:[parent1,parent2],
//         children:kids.length ? kids : 'no kids'
//     };
// }


// const filterByType = (type, ...values) => {
//     return values.filter((v) => typeof V === type);
// };

const removeKey = (obj,key) => {
   delete [key] 
return {...obj};    
}

const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffiene: true,
    quantity: 3
};

let {price,quantity,teaName,...others} = teaOrder;
