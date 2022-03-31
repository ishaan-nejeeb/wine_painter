class Walker {
    constructor(x, y,hu, alcohol, maxA, minA,res) {
      this.hu = hu;
      this.res = res
      this.noiseX = x;
      this.noiseY = y;
      this.noiseZ = 0;
    //   this.x = map(noise(this.noiseX),0 ,1, 0, width);
    //   this.y = map(noise(this.noiseY),0, 1, 0, height);
      this.x = x;
      this.y = y;
      this.noiseIncrement = map(alcohol, minA, maxA, 0.01, 0.09);
    //   this.noiseIncrement = 0.01;
      this.pos = createVector(this.x, this.y);
      this.prev = this.pos.copy();
      this.angle = 0;
    //   this.Xnoise;
    //   this.Ynoise;
    }
  
    updateVal(x, y, hu, alcohol, maxA, minA,res) {
      this.hu = hu;
      this.res =res
      this.noiseX = x;
      this.noiseY = y;
      this.noiseZ = 0;
      this.noiseIncrement = map(alcohol, minA, maxA, 0.001, 0.1);
      this.pos.x = x;
      this.pos.y = y;
      this.prev = this.pos;
    }
  
    display() {
      strokeWeight(2);
      stroke(255);
      colorMode(HSL);
      stroke(this.hu,66,53);
        
    //   push();
    //   translate(this.prev.x, this.prev.y); 
    //   rotate(this.angle); 
      beginShape();
      vertex(this.prev.x, this.prev.y);
    //   console.log(this.prev);
      vertex(this.pos.x, this.pos.y);
    //   console.log(this.pos);
      endShape();
    //   line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    //   fill(255);
    //   circle(this.pos.x, this.pos.y, 5);
    //   pop();
      this.prev.x = this.pos.x;
      this.prev.y = this.pos.y;
      
    //   fill(255);
    //   circle(this.pos.x, this.pos.y, 5);
    //   console.log(this.pos);
    }
  
    update() {
      this.angle =
        noise(this.pos.x, this.pos.y, this.noiseZ) * TWO_PI;// * noiseStrength; //0-2PI\
    //   console.log(this.angle);  
    //   this.Xnoise = noise(this.noiseX);
    //   this.Ynoise = noise(this.noiseY);
      this.Xnoise = cos(this.angle)*this.res;
    //   console.log(cos(this.angle));
    //   console.log(cos(this.angle));
    //   console.log(this.res);
    //   console.log(cos(this.angle)*this.res)
    //   console.log(this.Xnoise);
      this.Ynoise = sin(this.angle)*this.res;
    //   console.log(sin(this.angle));
    //   console.log(this.Ynoise);
      this.Xnoise = this.pos.x+this.Xnoise;
      this.Ynoise = this.pos.y+this.Ynoise;
    //   this.Xnoise = map(this.Xnoise, 0, 1, 0, width);
    //   this.Ynoise = map(this.Ynoise, 0, 1, 0, height);
      this.step = createVector(this.Xnoise, this.Ynoise);
    //   console.log(this.step);
      
    //   console.log(this.pos);
    //   console.log(this.pos);
      this.pos = this.step;
    //   console.log(this.pos);
    //   console.log(this.prev);
    //   console.log(this.step);
    //   this.pos.x=this.pos.x+Xnoise;
    //   this.pos.y=this.pos.y+Ynoise;
    //   console.log(this.pos);
    //   this.pos.x = Xnoise;
    
    //   this.pos.y = Ynoise;
      // console.log(this.step);
      //this.pos.add(this.step);
      //console.log(this.pos);
  
    //   if (this.pos.x < 0) {
    //     this.pos.x = width;
    //     this.prev.x = width;
    //   } 
    //   if (this.pos.x > width) {
    //     this.pos.x = 0;
    //     this.prev.x = 0;
    //   }
    //   if (this.pos.y < 0) {
    //     this.pos.y = height;
    //     this.prev.y = height;
    //   }
    //   if (this.pos.y > height) {
    //     this.pos.x = 0;
    //     this.prev.y = 0;
    //   }

      if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
          this.pos.x = random(width);
          this.pos.y = random(height);
          this.prev.x = this.pos.x;
          this.prev.y = this.pos.y;
      }     
   
      this.noiseZ += this.noiseIncrement;
    //   this.noiseX+=this.noiseIncrement;
    //   this.noiseY+=this.noiseIncrement;
    }
  }
  