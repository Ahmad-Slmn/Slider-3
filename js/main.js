   var sliderIndex = 0;
   var sliderImages = document.querySelectorAll(".slider img");
   var sliderInterval = setInterval(nextSlide, 5000);
   var dotsContainer = document.querySelector(".dots");

   for (var i = 0; i < sliderImages.length; i++) {
       var dot = document.createElement("li");
       dot.setAttribute("data-index", i);
       dotsContainer.appendChild(dot);
       if (i === 0) {
           dot.classList.add("active");
       }
       dot.addEventListener("click", function () {
           clearInterval(sliderInterval);
           sliderImages[sliderIndex].classList.remove("active");
           sliderIndex = this.getAttribute("data-index");
           sliderImages[sliderIndex].classList.add("active");
           activateDot(sliderIndex);
           sliderInterval = setInterval(nextSlide, 5000);
       });
   }

   function nextSlide() {
       sliderImages[sliderIndex].classList.remove("active");
       sliderIndex++;
       if (sliderIndex >= sliderImages.length) {
           sliderIndex = 0;
       }
       sliderImages[sliderIndex].classList.add("active");
       activateDot(sliderIndex);
   }

   function activateDot(index) {
       var dots = document.querySelectorAll(".dots li");
       for (var i = 0; i < dots.length; i++) {
           dots[i].classList.remove("active");
       }
       dots[index].classList.add("active");
   }
