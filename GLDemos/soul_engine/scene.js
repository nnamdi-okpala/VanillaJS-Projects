  
   var Scene=( function () {
     function Scene (width,height){
        this.canvas= document.createElement("canvas");
        this.canvas.width=width;
        this.canvas.height=height;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas)
         return { canvas:this.canvas,width: this.width, height:this.height, context:this.context }
    }
    return Scene
  })()

export default Scene;