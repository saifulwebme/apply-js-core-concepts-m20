// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches /12;
// console.log ('dada feet', dadaFeet);


// const dadiInches = 60;
// const dadiFeet = dadiInches /12;
// console.log('Dadi Feet', dadiFeet)

function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);



const nanaInchese = 168;
const nanaFeet = inchesToFeet(nanaInchese);
console.log('nana feet', nanaFeet);