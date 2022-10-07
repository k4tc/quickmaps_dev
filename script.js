let messageArray = [
    "Last seen getting into garbage in North Arlington.",
    "Was chasing cats near the school.",
    "slipped out the back while I wasn't looking.",
    "Is really a good boy."];


let imageArray = ["data/shepherd.jpg",
    "data/pitbull.jpg",
    "data/terrier.jpg",
    "data/mutt.jpg"];
let counter = 0;
//document.getElementById('circle1').setAttribute("height", "10px");
//this is leaflet information 
var mymap = L.map('mapid').setView([39.6035720419788, -0.09], 13);

$(document).ready(function () {





    $("#myimage2").click(function () {
        //   dragElement(document.getElementById('myimage2'));  
        let trap = document.getElementById('messageBox').innerHTML;


        var randNumMin = -980;
        var randNumMax = 980;
        var xPos = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
        var yPos = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
        console.log(trap);

        document.getElementById('myImg').src = imageArray[counter];
        document.getElementById('message').innerHTML = "<h1>" + messageArray[counter] + "</h1"



        $(this).animate({ 'backgroundPosition-x': '+=' + xPos }, "fast");
        $(this).animate({ 'backgroundPosition-y': '+=' + yPos }, "fast");
        //let message = document.getElementById("messageBox").innerHTML;

        counter = counter + 1;
        if (counter > messageArray.length - 1) {
            counter = 0;
        }


    });

});