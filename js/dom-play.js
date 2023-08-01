//alert("Hi from DOM Play!");

/*

    Create an app that on click actors lines are highlighted

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    Un-highlight (normal or otherwise) all lines from all other actors in the play

    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
 
    HTML "hooks" may be added to the page for proper operation

*/

//document.querySelector(".hamlet").style.backgroundColor = "yellow";
function highlight(el) {
    if (el.style.backgroundColor == "white") {
      //orange
      el.style.backgroundColor = "orange";
    } else {
      //white
      el.style.backgroundColor = "white";
    }
  }
  /*
  function myAlert(){
      alert("I'm clicked!");
  }
  */
  
  function reverseHighlight() {
    const highlightedLines = document.querySelectorAll(
      "[style='background-color: orange;']"
    );
    highlightedLines.forEach((line) => {
      line.style.backgroundColor = "white";
    });
  }
  
  function highlightActor(mySpan) {
    if (mySpan.querySelector("span[data-actor]") !== null) {
      //current actor
      mySpan.style.backgroundColor = "orange";
    } else {
      //other actor
      mySpan.style.backgroundColor = "pink";
    }
  }
  
  const spans = document.querySelectorAll("p");
  console.log(spans);
  
  // for(const mySpan of spans){
  //     //mySpan.addEventListener("click", myAlert);
  //     mySpan.addEventListener("click",function(ev){
  //         highlightActor(mySpan.dataset.actor);
  //     });
  //     //alert(mySpan.dataset.actor);
  // }
  
  // document.addEventListener("click", function(ev) {
  //     const target = ev.target;
  //     if (!target.matches("#play span")) {
  //         reverseHighlight();
  //     }
  // });
  
  //
  var clickCount = 0;
  
  for (const mySpan of spans) {
    mySpan.addEventListener("click", function () {
      clickCount++;
  
      if (clickCount == 1) {
        clickTimer = setTimeout(() => {
          //alert("One click");
          highlightActor(mySpan);
        }, 100);
      } else if (clickCount == 2) {
        //alert("Double click");
        mySpan.style.backgroundColor = "white";
        clearTimeout(clickTimer);
        clickCount = 0;
      }
    });
  } //alert(mySpan.dataset.actor);
  