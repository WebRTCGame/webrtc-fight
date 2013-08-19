var Scene = function Scene(id) {
    this.loop = true;
    this.icanvas = hashCanvas.addCanvas(id);
    this.process = function() {

        this.update();
        this.draw();
        if (this.loop) {
            window.requestAnimFrame(this.process);
        }

    };
    this.draw = function draw() {
        this.icanvas.ctx.save();
        this.render();
        this.icanvas.ctx.restore();
        this.icanvas.flip();
    };
    this.init();
    window.requestAnimFrame(this.process);
};

Scene.prototype.render = function render() {

};
Scene.prototype.update = function update() {

};
Scene.prototype.init = function init() {

};

