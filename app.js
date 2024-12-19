const valueObjects = [
    { src: "https://www.nasa.gov/wp-content/uploads/2024/12/afrc2024-0166-033orig.jpg", alt: "Photograph of a high-tech drone flying across a blue sky, with a distant moon in the background."},
    { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/galaxies/spiral/Hubble_NGC5643_potw2450a.jpg?w=4096&format=webp&fit=clip&crop=faces%2Cfocalpoint", alt: "Photograph of a swirling, red galaxy in space."},
];

console.log (valueObjects.length);
// Lines 8 9 10 and 11, assigns a value to my HTML containters in the DOM. I am doing this so I can select and manipulate them in JavaScript.
const ThumbnailsContainer = document.querySelector(".Thumbnails-Container");
console.log;(ThumbnailsContainer);
const FullSizedImgContainer = document.querySelector(".Fullsizedimg-Container");
console.log;(FullSizedImgContainer);
// Line 13 declares the function to create thumbnails.
function generatethumbnails() {
    // line 15 is going to look inside the 'valueObjects' array -> perform the following function 'FOREACH' of the objects found in the array. Also, for the following objects in the array, they will be reffered to as 'currentObject'. For each object the function finds in the array, it will refer to that object as 'currentObject' from now on.
    valueObjects.forEach(function(currentObject)){
    let generatedImage = document.createElement("img");
    // lines 18 and 19 are setting the src and alt for our newly generated image element. They are matching the value of the src and alt of the object that the FOREACH loop is looking at, at the time. The reason that we refer to the src and alt of the array object as currentObject.src and currentObject.alt is because we told the function that we would refer to these objects as 'currentObject'.
    generatedImage.src = currentObject.src;
    generatedImage.alt = currentObject.alt;
    // Lines 21 and 22 will set the width and height of the generated image.
    generatedImage.width(150px);
    generatedImage.height(100px);
    // Line 24 will append the function's output to the 'Thumbnails-Container' section in the HTML.
    ThumbnailsContainer.appendChild(generatedImage);
    // Line 26 will log the newly generated image to the console.
    console.log (generatedImage);
    // Line 28 adds the 'event' for when the user clicks on the thumnail images to display the larger version of the image.
    addEventListener("click", handleClick, displayLargeImage());
} 
    };
    generatethumbnails();

    // I have now written the function that will generate the thumbnail images and defined the parameters for the function.

    // Below is my inital image source loop. Joe very kindly introduced me to the 'forEach' loop to use instead.
//     let generatedImage = document.createElement("img");
//     generatedImage.src = "";
//     generatedImage.alt = "";
// for (let i = 0; i =< images.length; i++);

  function displayLargeImage() {
    FullSizedImgContainer.innerHTML = null;
    valueObjects.forEach(function(largerObject)){
        let largerGeneratedImage = document.createElement("img");
        largerGeneratedImage.src = largerObject.src;
        largerGeneratedImage.alt = largerObject.alt;
        largerGeneratedImage.width(100rem);
        largerGeneratedImage.height(100rem);
        FullSizedImgContainer.appendChild(largerGeneratedImage);
        console.log(largerGeneratedImage);
    }
    };
  
