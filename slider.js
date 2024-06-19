let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imageElement = document.getElementById("imageDisplay");
let images = [
  " https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
  " https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  " https://images.unsplash.com/photo-1499117901949-e34ef1b2444a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
  " https://images.unsplash.com/photo-1710600633775-5bd245fdaffe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
];


prev.addEventListener("click", function () {
  let imageUrl = " https://images.unsplash.com/photo-1682687981922-7b55dbb30892?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 ";
  imageElement.src = imageUrl;
  next.style.opacity = 1;
  showImages(next);
});



let index = 0;
function showImages() {
  next.addEventListener("click", function () {
    index++; // Move to the next image. Jb mai click kru tbhi next image aage bde..
    if (index >= images.length) {
      index = 0; // Reset to the first image if the end is reached
    }
    imageElement.src = images[index]; // Update the image element
    next.style.opacity = (index === images.length - 1) ? 0 : 1; // Hide the button if it's the last image, otherwise show it
  });
}

showImages();
//________Time complexity..........
// Adding the event listener is also a one-time setup operation, 
// so its time complexity is O(1).



//unnecessary used loop............
// let next = document.querySelector(".next");
// function showImages() {
//   let index = 0;
//   next.addEventListener("click", function () {
//     next.style.opacity = 0;
//     for (let i = 0; i <= images.length - 1; i++) {
//       if (i == index) {
//         imageElement.src = images[i];
//         index++;
//         next.style.opacity = 1;
//         if (index <= imageElement.length) {
//           index = 0;
//         }
//         break;
//       }
//     }
//   });
// }
// showImages();



//method 1 FAIL.......
// let next = document.querySelector(".next");
// function showImages() {
//   next.addEventListener("click", function () {  
//     for (let i = 0; i <= images.length - 1; i++) {
//       imageElement.src = images[i];
//       if (images[i] = images.length - 1) {
//         next.style.opacity = 0;
//       }
//       else {
//         next.style.opacity = 1;
//       }
//     }
//   });
// }
// showImages();



//method 2 FAIL...........
// let next = document.querySelector(".next");
// function showImages() {
//   next.addEventListener("click", function () {
//     let i = 0;
//     while ( i != images.length-1) {
//       imageElement.src = images[i];
//       i++;
//       if (images[i] = images.length - 1) {
//         next.style.opacity = 0;
//       }
//       else {
//         next.style.opacity = 1;
//       }
//     }
//   });
// }
// showImages();

