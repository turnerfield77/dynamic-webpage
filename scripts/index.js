/*
    I initially misunderstood the point of the exercise and it isn't actually 'dynamic', so if this is reviewed before I get to actually correct it, I'm working through making each post dynamically built.
*/

document.addEventListener('DOMContentLoaded', function(){
    // Get container element to append all html to
    var container = document.getElementById("container");

    // Add styling to container for sizing and font
    container.style.fontFamily = "Arial";
    container.style.paddingLeft = "10%";
    container.style.paddingRight = "10%";

    /*
        Header Section
    */

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

    
    // Create new container 'main' for the rest of the page and append to container element
    var main = document.createElement("div");
    container.appendChild(main);

    // Style 'main'
    main.style.padding = "20px";

    /*
        Curse of the Current Reviews Section
    */

    // Create new div, h1 and p tags for Reviews section and append to main
    var currentReviews = document.createElement("div");
    var reviewsHeading = document.createElement("h1");
    var reviewsParagraph = document.createElement("p");
    main.appendChild(currentReviews);
    currentReviews.appendChild(reviewsHeading);
    currentReviews.appendChild(reviewsParagraph);

    // Add text to the child elements
    reviewsHeading.innerHTML = "Curse of the Current Reviews";
    reviewsParagraph.innerHTML = "When you buy any application from the Apple iTunes storeyou have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot and reviews."
    
    // Style currentReviews along with child elements
    currentReviews.style.backgroundColor = "#DBD2ED";
    currentReviews.style.color = "#49464F";
    currentReviews.style.padding = "5px 20px 10px 20px";


    /*
        Hello Watchkit Section
    */
 
    // Create new div's for Hello WatchKit section and append to necessary parent elements
    // 1st div to house entire section
    // 2nd div as child to 1st to house only comments and likes
    var helloWatchkit = document.createElement("div");
    // var helloWatchkitFooter = document.createElement("div");

    // Create child elements of the above two elements and append to necessary parent
    var watchkitHeading = document.createElement("h2");
    var watchkitParagraph = document.createElement("p");
    var watchkitList = document.createElement("ul");
    var watchkitComments = document.createElement("li");
    var watchkitLikes = document.createElement("li");
    main.appendChild(helloWatchkit);
    helloWatchkit.appendChild(watchkitHeading);
    helloWatchkit.appendChild(watchkitParagraph);
    // helloWatchkit.appendChild(helloWatchkitFooter);
    helloWatchkit.appendChild(watchkitList);
    watchkitList.appendChild(watchkitComments);
    watchkitList.appendChild(watchkitLikes);

    // Add text for each necessary element
    watchkitHeading.innerHTML = "Hello WatchKit";
    watchkitParagraph.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
    watchkitComments.innerHTML = "12 comments";
    watchkitLikes.innerHTML = "124 Likes";

    // Style each element
    helloWatchkit.style.display = "flex";
    helloWatchkit.style.flexDirection = "column";
    helloWatchkit.style.justifyContent = "flex-start";
    watchkitHeading.style.color = "#61BDFF";
    watchkitHeading.style.marginBottom = "0";
    watchkitParagraph.style.color = "#49464F";
    watchkitParagraph.style.marginBottom = "0";
    watchkitList.style.backgroundColor = "#F8AB11";
    watchkitList.style.color = "white";
    watchkitList.style.marginTop = "0";
    watchkitList.style.padding = "5px";
    watchkitComments.style.paddingRight = "30px";
    watchkitComments.style.display = "inline-block";
    watchkitLikes.style.display = "inline-block";

    /*
        Introduction to Swift Section
    */

    // Create div element for swift section and append to main
    var swift = document.createElement("div");
    main.appendChild(swift);

    // Create elements that make up swift section and append
    var swiftHeading = document.createElement("h2");
    var swiftParagraph = document.createElement("p");
    var swiftList = document.createElement("ul");
    var swiftComments = document.createElement("li");
    var swiftLikes = document.createElement("li");
    swift.appendChild(swiftHeading);
    swift.appendChild(swiftParagraph);
    swift.appendChild(swiftList);
    swiftList.appendChild(swiftComments);
    swiftList.appendChild(swiftLikes);

    // Add text to the child elements
    swiftHeading.innerText = "Introduction to Swift";
    swiftParagraph.innerText = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started";
    swiftComments.innerText = "15 Comments";
    swiftLikes.innerText = "45 Likes";

    // Style child elements
    swift.style.display = "flex";
    swift.style.flexDirection = "column";
    swift.style.justifyContent = "flex-start";
    swiftHeading.style.color = "#61BDFF";
    swiftHeading.style.marginBottom = "0";
    swiftParagraph.style.color = "#49464F";
    swiftParagraph.style.marginBottom = "0";
    swiftList.style.backgroundColor = "#F8AB11";
    swiftList.style.color = "white";
    swiftList.style.marginTop = "0";
    swiftList.style.padding = "5px";
    swiftComments.style.paddingRight = "30px";
    swiftComments.style.display = "inline-block";
    swiftLikes.style.display = "inline-block";
})
