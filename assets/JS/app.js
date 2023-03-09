let charLengths ;
/*get the number of characters*/
function charLength() {

     charLengths = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLengths;

    // console.log(charLengths);
    return charLengths;
   

}

document.getElementById('length').addEventListener('change', charLength)

function generate() {
    let isac=charLengths
    let password
    let output=" ";
   
    let capital = document.getElementById("uppercase").checked
    let small=document.getElementById("lowercase").checked
    let number=document.getElementById("numbers").checked
    let symbols=document.getElementById("symbols").checked

    let arr =   [...Array(26)].map((_, i) => 
    String.fromCharCode(i + (capital ? 65 : 97)))
    // console.log(arr);

    let arr1=[...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    let arr2=["1","2","3","4","5","6","7","8","9","0"]
    let arr3=["!","@","#","$","%","^","&","*"]
    // console.log(arr);
    for(i=1;i<=charLengths;i++){
        // for only capital 
    if (capital == true && small==false &&number==false&&symbols==false) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    //  console.log(output);
    }  

    // for only small 
    if (small == true&&capital==false&&number==false&&symbols==false) {
        const randomIndex = Math.floor(Math.random() * arr1.length);
        const item = arr1[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

    // for number only 
    if (number == true&&capital==false&&small==false&&symbols==false) {
        const randomIndex = Math.floor(Math.random() * arr2.length);
        const item = arr2[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

      // for symbol only 
      if (number == false&&capital==false&&small==false&&symbols==true) {
        const randomIndex = Math.floor(Math.random() * arr3.length);
        const item = arr3[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  
//   for number and capital 
    if (number == true&&capital == true&&small==false&&symbols==false) {

        let numcap=arr.concat(arr2)
        console.log(numcap);
        const randomIndex = Math.floor(Math.random() * numcap.length);
        const item = numcap[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

    //   for number and symbol 
    if (number == true&&capital == false&&small==false&&symbols==true) {

        let symcap=arr2.concat(arr3)
        // console.log(numcap);
        const randomIndex = Math.floor(Math.random() * symcap.length);
        const item = symcap[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  


// for number and small 
    if (number == true&&small == true&&capital==false&&symbols==false) {
        let numsmall=arr1.concat(arr2)
        const randomIndex = Math.floor(Math.random() * numsmall.length);
        const item = numsmall[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  

    // for symbol and small 
    if (number ==false&&small == true&&capital==false&&symbols==true) {
        let symsmall=arr1.concat(arr3)
        const randomIndex = Math.floor(Math.random() * symsmall.length);
        const item = symsmall[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  


// for small and cap 

    if (small == true&&capital == true&&number==false&&symbols==false) {
        let smcap=arr.concat(arr1)
        
        const randomIndex = Math.floor(Math.random() * smcap.length);
        const item = smcap[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  


    // for symbol and cap 

    if (small == false&&capital == true&&number==false&&symbols==true) {
        let symcap=arr.concat(arr3)
        
        const randomIndex = Math.floor(Math.random() * symcap.length);
        const item = symcap[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  



    // for cap small number 
    if (small == true&&capital == true&&number == true&&symbols==false) {
        let smcaps=arr.concat(arr1)
        // console.log(smcaps);
        let snc=smcaps.concat(arr2)
    //    console.log(snc);
        const randomIndex = Math.floor(Math.random() * snc.length);
        const item = snc[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }  
    

        // for cap small symbol 
        if (small == true&&capital == true&&number == false&&symbols==true) {
            let symsmcaps=arr.concat(arr1)
            // console.log(smcaps);
            let snc=symsmcaps.concat(arr3)
        //    console.log(snc);
            const randomIndex = Math.floor(Math.random() * snc.length);
            const item = snc[randomIndex];
         password=item
         output=output+password
         document.getElementById('password__result').value = output;
        }  
    
        // for cap num symbol 
        if (small == false&&capital == true&&number == true&&symbols==true) {
            let symsmcaps=arr.concat(arr2)
            // console.log(smcaps);
            let snc=symsmcaps.concat(arr3)
        //    console.log(snc);
            const randomIndex = Math.floor(Math.random() * snc.length);
            const item = snc[randomIndex];
         password=item
         output=output+password
         document.getElementById('password__result').value = output;
        }  

        // for cap num symbol 
        if (small == true&&capital == false&&number == true&&symbols==true) {
            let symsmcaps=arr1.concat(arr2)
            // console.log(smcaps);
            let snc=symsmcaps.concat(arr3)
        //    console.log(snc);
            const randomIndex = Math.floor(Math.random() * snc.length);
            const item = snc[randomIndex];
         password=item
         output=output+password
         document.getElementById('password__result').value = output;
        }  


        // for cap num symbol small
        if (small == true&&capital == true&&number == true&&symbols==true) {
            let symsmcaps=arr.concat(arr1)
            // console.log(smcaps);
            let snc=symsmcaps.concat(arr2)
        //    console.log(snc);
        let all=snc.concat(arr3)
            const randomIndex = Math.floor(Math.random() * all.length);
            const item = all[randomIndex];
         password=item
         output=output+password
         document.getElementById('password__result').value = output;
        }  
        
}


}

