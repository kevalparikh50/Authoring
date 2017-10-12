
(function(){
    
    var theImages = document.querySelectorAll('.image-holder'),
        theHeading = document.querySelector('.heading'),
        theSubhead = document.querySelector('.main-copy h2'),
        theSeasonText = document.querySelector('.main-copy p'),
        appliedClass;
    
    
    //I want to change my all content on one page
    
    function changeElements(){
        
       // debugger;    //this is special term that stop code execution
        
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];
        
        // remove duplicate images
        while(subImages.firstChild){
            
            subImages.removeChild(subImages.firstChild);
            
        }
         
        // add images to the bottom of the page
        
        objectIndex.images.forEach(function(image, index){
            
            // create an image element
            let newSubImage = document.createElement('img');
            
            
            // add css class to it
            newSubImage.classList.add('thumb');
            
            
            // set src
            newSubImage.src = "images/" + objectIndex.images[index];
       
               
        newSubImage.dataset.index = index;
            
            
            
            //eventlistner for lightbox
            newSubImage.addEventListener('click', function() {popLightbox(index, objectIndex);},false);
            
    
            
            
            // add it to the page
            subImages.appendChild(newSubImage);
            
            
        });
 
        
        // remove the colors we applied in last click
        theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);
        
        //change the text using the values of the properties in the object
        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;
        
        //add the colors that corrospond to the season we clicked on
        theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);
        
        appliedClass = this.id;
    }
    
   theImages.forEach(function(image, index){
       
       //add event handler to each image
       image.addEventListener('click', changeElements, false);
   });
    

    
    
    //trigger the lightbox
    
    function popLightbox(currentIndex, currentObject){
       
        // debugger
        
    //    
        window.scrollTo(0, 0);
        
      document.body.style.overflow = "hidden";
      
        
         // trigger the lightbox overlay so that we can see it!
        
        
        let lightbox = document.querySelector('.lightbox');
        let lightboxImg = lightbox.querySelector('img');
        let lightboxdesc = lightbox.querySelector('p');
        let lightBoxClose = lightbox.querySelector('.close-lightbox');
        

        lightbox.style.display = 'block';
        lightboxImg.src = "images/" + currentObject.images[currentIndex];
        lightboxdesc.innerHTML = currentObject.imageDescription[currentIndex];
   
        lightBoxClose.addEventListener('click', closeLightbox, false);
    }
          function closeLightbox(){
              
              // reset everything
              // debugger;
              let lightbox = document.querySelector('.lightbox');
              lightbox.style.display="none";
              document.body.style.overflow="visible";
               document.body.style.display="block";

              
          }


    ///document.querySelector('#spring').click();
 
    changeElements.call(document.querySelector('#summer'));
    changeElements.call(document.querySelector('#autumn'));
    changeElements.call(document.querySelector('#winter'));
    changeElements.call(document.querySelector('#spring'));

    

    
    
})();


















