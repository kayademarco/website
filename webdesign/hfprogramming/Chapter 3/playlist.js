//Creating Add Song Button below. The following allows us to make the button add a song to the list
var button = document.getElementById("addbutton") ;

button.onclick = handleButtonClick;

window.onload = init;
function init()
    {
        var button = document.getElementById ("addButton");
        button.onclick = handleButtonClick;
    }
function handleButtonClick()
    {
        alert ("Button was clicked!")
    }
