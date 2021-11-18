class Slider{
    constructor(){
      this.images = [];
      this.images[0] = "images/slider1.jpg";
      this.images[1] = "images/slider2.jpg";
      this.images[2] = "images/slider2.jpg";
  
      this.counter = 0;
  
      this.playSlider();
  
      setInterval(()=>{
        this.playSlider();
      },3000);
  
    }
    playSlider(){
      if(this.counter< this.images.length - 1){
        this.counter++;
      }
      else{
        this.counter = 0;
      }
  
      document.slider_show.src = this.images[this.counter];
     
  
   
    }
  }
  onload = new Slider();