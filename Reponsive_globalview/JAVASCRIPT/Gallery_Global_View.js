//adding loading function

document.addEventListener('DOMContentLoaded', function() {

    //Select all images
    const images = document.querySelectorAll('.gallery-image');

  //Adding click function for each image
  
    images.forEach(image => {
        image.addEventListener('click', function() {

             //Increase from 1 to 1.38 image size zoom

             const Zoom = this.style.transform === "scale(1.38)";

             this.style.transform = "tranform 0.3s ease";

             this.style.transform = Zoom ? "scale(1)" : "scale(1.38)";
         });
        });
    });

