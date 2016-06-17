var clicks = 0;
$(document).ready(function(){
  $('#generate').on('click', function(){
   clicks++;
      //adds div to DOM
       var newDiv = document.createElement('div');
       newDiv.textContent = '';
       newDiv.className = 'new';
       document.getElementById('display').appendChild(newDiv);
       //creates and adds new delete button
      var delButton = document.createElement('button');
      delButton.textContent = 'delete';
      delButton.className = "delete";
      newDiv.appendChild(delButton);
      //creates and adds new change button
      var changeButton = document.createElement('button');
      changeButton.textContent = 'Change';
      changeButton.id = 'changeClr' + clicks;
      changeButton.style.backgroundColor  = 'red';
      newDiv.appendChild(changeButton);
     //creates and displays click counter
      var clickCounter = document.createElement('p');
      clickCounter.textContent = 'there have been this many clicks: ' + clicks;
      document.getElementById('display').appendChild(clickCounter);
      //delete button functionality
     $(".delete").on('click', function(){
       $(this).parent().remove();
     });
     //color change button functionality
    $("#changeClr"+ clicks).on('click', function(){
       $(this).parent().toggleClass('change');
       changeButton.style.backgroundColor = 'yellow';
       changeButton.textContent = 'change back';
       changeButton.className = 'changebck';
    $('.changebck').on('click', function(){
       changeButton.style.backgroundColor = 'red';
       changeButton.textContent = 'Change';
       $(this).removeClass( 'changebck');
    });
     });


    });
});
// Description
// Hey Everyone!
//
// Here is your week 2 assessment challenge!
//
// When the page loads, have a button on the DOM that says 'generate'. Upon clicking on that button,
// append a new container onto the DOM. That container should have two buttons, one that reads 'delete',
// the other that reads 'change'. Additionally, there should be text that provides a number.
// The number should be the number of times the 'generate row' button has been clicked.
//
// The delete button should delete JUST the container that the button is in. The change button should change the
// background-color of the container to red. The default or 'normal' state of the background-color should be
// yellow. Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
//
// Do not add in anything additional beyond what is required. The goal is not to be clever here,
// it is simply to execute on the provided instructions.
//
// Once you are complete, check your work into a new repo and post it on GitHub.
//
// A friendly reminder that this is simply a way for us to see how you are individually doing with the
// technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit.
// This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far.
// It just gives us an idea of where you are at.
//
// Just relax and show us what you know!

// Thanks and good luck!
