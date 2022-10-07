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

$(document).ready(function () {

    var mymap = L.map('mapid').setView([39.6035720419788, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGF0aGdyYWIiLCJhIjoiY2pkYWJlYm9xM3VkZTJ5cWZ4ZndmcmtibiJ9.yLcEsvXkMAtI360MoYCkGA'
    }).addTo(mymap);

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