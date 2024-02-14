/*function max2(a,b)
{  
    if (a>b)
    return a 

    else 
     { return b }
}

console.log(max2(5,8))
console.log(max2(6,7))
*/
/*function afficherBonjour() {
    console.log("Bonjour");
}
afficherBonjour();
*/
/*function afficherSomme() {
    var num1 = parseFloat(prompt("Entrez le premier nombre :"));
    var num2 = parseFloat(prompt("Entrez le deuxième nombre :"));

    var somme = num1 + num2;
    console.log("La somme est : " + somme);
}
afficherSomme();
*/

function moveIntoBody() {
    var div = document.getElementById("myDiv");
    document.body.appendChild(div);
  }
  
  function moveOutOfBody() {
    var div = document.getElementById("myDiv");
    div.parentNode.removeChild(div);
  }
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }



