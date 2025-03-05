// async and await 

let url = "https://catfact.ninja/breeds?limit=5"

async function fetchfact(){
   const response = await fetch(url);
   const result = await response.json();
   
   console.log(result)
   const breeds = result.data;
   breeds.forEach(breed=> {
    console.log(`${breed.breed} from ${breed.country}`)
   });

}
// https://pokeapi.co/api/v2/berry/{id or name}/
let berryurl = "https://pokeapi.co/api/v2/berry/5/"

async function getberry(){
    const resp = await fetch(berryurl);
    const res = await resp.json();
    const flavors = res.flavors;
    flavors.forEach(flavor=>{
      console.log(flavor.flavor.name)
    })
    setTimeout(() => {
      console.log("Hi, I am within the function , i need to wait , i also delay with 5seconds")
   }, 5000);
}

console.log("Independent console.log")
getberry();

let string1 = "cable";
console.log("My string "+string1 +" ends with "+string1.endsWith("e"))

numsarray = [2,4,5,6,7]
console.log("Array",numsarray)
numsarray.push(8);
console.log(numsarray)
console.log("Result from popping the array",numsarray.pop())
let length = numsarray.length;
let message = `The length of nums arrays is ${length}`
let minimum = Math.min(...numsarray)
console.log("Minimum number is "+minimum)
console.log(message);
numsarray.forEach(num=>{
      console.log(num)

});

let nums=()=>{
   numsarray.forEach(number=>{
      console.log(number)
   })
}

setTimeout(() => {
   nums()
}, 6);

let updateTime = () => {
   const now = new Date();
   let hours = now.getHours().toString().padStart(2, '0');
   let minutes = now.getMinutes().toString().padStart(2, '0');
   let seconds = now.getSeconds().toString().padStart(2, '0');
   let currentTime = `${hours}:${minutes}:${seconds}`;
   document.getElementById("gettime").textContent = currentTime;

};

// Update time immediately and then every second
let intervalStarted = false;
document.getElementById("gettime").addEventListener("mouseenter",()=>{
   if (!intervalStarted){
   updateTime();
   setInterval(updateTime, 1000);
   intervalStarted = true;
   }
});

document.getElementById("color").addEventListener("change",() => {
   document.getElementById("colorlabel").style.color = document.getElementById("color").value;
})

let reducearray = [10,20,30,40,50]
let sum = reducearray.reduce((acc,cur)=>acc+cur,0);
console.log(`Sum of a reduced array is ${sum}`)

let numbers = [4,8,16,32]
let doubled = numbers.map(num=>num*2)
console.log("Mapped array: "+doubled)

let longwords = ["Wanjiku","Wambui","Emerald"]
let islong = longwords.every(longword=>longword.length>3);
console.log(`Is it true that all words in ${longwords} array are longer than 3 letters? ${islong}`)