let charLengths ;
/*get the number of characters*/
function charLength() {

     charLengths = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLengths;
    console.log(charLengths);
    return charLengths;
   

}

document.getElementById('length').addEventListener('change', charLength)

function generate() {
    let isac=charLengths
    let password
    let output=" ";
   
    let capital = document.getElementById("uppercase").checked
    let arr =   [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
    console.log(arr);
    for(i=1;i<=isac;i++){
    if (capital == true) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

}

}