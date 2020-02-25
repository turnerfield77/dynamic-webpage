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
    var divTitle = document.createElement("div");
    var title = document.createElement("h1");
    var divNav = document.createElement("div");
    var nav = document.createElement("nav");
    var home = document.createElement("li");
    var categories = document.createElement("li");

    // Apend elements to container
    container.appendChild(header);
    header.appendChild(divTitle);
    header.appendChild(divNav);
    divTitle.appendChild(title);
    divNav.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(categories);

    // Add styling to header
    header.style.backgroundColor = "#61BDFF";
    header.style.color = "#FFFFF9";
    header.style.paddingLeft = "30px";
    header.style.paddingRight = "30px";
    header.style.display = "flex";
    header.style.justifyContent = "flex-start";
    

    // Add styling to child elements of header
    divNav.style.display = "flex";
    divNav.style.alignItems = "center";
    home.style.display = "inline-block";
    home.style.fontSize = "22px";
    home.style.paddingLeft = "50px";
    home.style.paddingRight = "50px";
    categories.style.display = "inline-block";
    categories.style.fontSize = "22px";

    // Add text
    title.innerHTML = "HighOnCoding";
    home.innerHTML = "Home";
    categories.innerHTML = "Categories";
})
