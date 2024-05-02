// Declare your arrays here
let anticipationUrls=["missing.jpg","Get Out.jpg","Now.jpg"];
let fearUrls= ["sinister.jpg","Conjuring.jpg ","insidious.jpg "];
let adventurousUrls=["Maze Runner.jpg","Potter.jpg ","lod.jpg"];
let sillyUrls= ["KungFu.jpg","TheHeat.jpg","The_Man_From_Toronto.jpg"];

// Make sure to declare your HTML elements as variables! 

let input= document.querySelector("input").value;

// Submit Button 
let submitButton = document.querySelector("button");
let mood;
    
submitButton.addEventListener("click", function() {
   
    if (input === "Anticipation") {
 mood= anticipationUrls;
    }
   else if(input==="Fear"){
    mood=fearUrls;
   }
    else if (input=== "Adventurous"){
      mood=adventurousUrls;
    }
       else if (input==="Silly"){
        mood=sillyUrls;
       }
  
});
input.forEach(function(url){
let image=document.createElement("img");
image.src=url;
mood.appendChild(image);

});