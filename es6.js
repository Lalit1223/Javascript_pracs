
function name1(){

}
name1();

const name2 = function(){

}
name2();

const name3 = ()=>{

}
name3();

//map
var array = [1,2,3,4,5];

//using old function method
function mapper(num){
    return num*2;
}
var result = array.map(mapper);
console.log(result);

//using arrow function (ES6)
var result = array.map((num)=>{
    return num *2;
});
console.log(result);

