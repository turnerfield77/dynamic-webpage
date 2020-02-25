/*
    Basic Outline of webpage
    - header
        - h1: High on Coding
        - ul: Home / Categories
    - div
        - h1: Curse of the Current Reviews
        - p: paragraph from image
    - div
        - h2: Hello WatchKit
        - p: paragraph from image
    - div
        - 12 comments / 124 likes
    - div
        - h2: Introduction to Swift
        - p: paragraph from image
    - div
        - 15 comments / 45 likes
*/

document.addEventListener('DOMContentLoaded', function(){
    // Get container element to append all html to
    var container = document.getElementById("container");

    // Add styling to container for sizing and font
    container.style.fontFamily = "Arial";
    container.style.paddingLeft = "10%";
    container.style.paddingRight = "10%";

    // Create elements necessary for header
    var header = document.createElement("header");
    var title = document.createElement("h1");
    var nav = document.createElement("nav");

    // Apend elements to container
    container.appendChild(header);
    header.appendChild(title);
    header.appendChild(nav);

    // Add styling to header
    header.style.backgroundColor = "#61BDFF";
    header.style.color = "#FFFFF9";
    // Add text
    title.innerHTML = "HighOnCoding";
    nav.innerHTML = "<ul><li>Home</li><li>Categories</li></ul>";
})
