var Scene = function Scene(id) {
    console.log("new scene: " + id);
    //this.loop = true;
    this.icanvas = hashCanvas.addCanvas(id);
    this.ctx = this.icanvas.getContext('2d');
    this.ctx.save();
    //this.timer = 2000;
    //this.useTimer = false;
   // this.init();
    
};
Scene.prototype.start = function start(){
    console.log("scene proto start");
    //window.requestAnimFrame(this.run);
    this.run();
};
Scene.prototype.render = function render() {
console.log("render");
};
Scene.prototype.update = function update() {
console.log("update");
};
Scene.prototype.init = function init() {
console.log("init");
};
Scene.prototype.run = function run() {
    /*
    var that = this;
    console.log("scene proto run");
    if (this.useTimer) {
        if (this.timer <= 0) {
            this.loop = false;
        }
        this.timer -= 1;
    }
    this.update();
    */
    //this.draw();
   // if (this.loop) {
        //window.requestAnimFrame(that.run);
    //}
 console.log("scene proto draw");
    this.ctx.save();
    this.render();
    this.ctx.restore();
    this.icanvas.flip();
    context.drawImage(this.icanvas,0,0);
    window.requestAnimFrame(this.run);

};
/*
Scene.prototype.draw = function draw() {
    console.log("scene proto draw");
    this.icanvas.ctx.save();
    this.render();
    this.icanvas.ctx.restore();
    this.icanvas.flip();
    context.drawImage(this.icanvas,0,0);
    window.requestAnimFrame(this.draw);
};
*/
var sceneInitialLoading = new Scene("initialloading");

sceneInitialLoading.render = function render(){
    
    //var ct = sceneInitialLoading.icanvas.ctx;
      this.ctx.beginPath();
      this.ctx.rect(10, 10, 200, 100);
      this.ctx.fillStyle = 'yellow';
      this.ctx.fill();
      this.ctx.lineWidth = 7;
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      console.log("sceneInitialLoading render");
};
sceneInitialLoading.init = function init(){
    console.log("sceneInitialLoading init");
   // this.useTimer = false;
   // this.loop = true;
    //this.start();
    this.run();
};