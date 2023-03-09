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
    let small=document.getElementById("lowercase").checked
    let arr =   [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
    let arr1=[...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    
    console.log(arr);
    for(i=1;i<=isac;i++){
    if (capital == true&&small==false) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  
    if (small == true&&capital==false) {
        const randomIndex = Math.floor(Math.random() * arr1.length);
        const item = arr1[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  
    if (small == true&&capital == true) {
        let smcap=arr.concat(arr1)
        console.log(smcap);
        const randomIndex = Math.floor(Math.random() * smcap.length);
        const item = smcap[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

}

}