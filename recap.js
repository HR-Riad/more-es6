// 1. let and const

const hero = ' Salman Khan';
let  phoneName = 'iphone 15'
phoneName = 'One plus';
//default parameter
// spread or three dots
function maxNum(array=[]){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNum();
console.log(biggest);
// template string
const myNotes = `I had a phone that name was ${phoneName} . I like ${hero}.`
console.log(myNotes);

//**arrow functtion**
// function square(x) {
//     return x * x;
// 
const square = x => x*x;
console.log (square(8));