var Scene = function Scene(id){
    this.loop = true;
    this.process = function() {

        this.update();
        this.render();
        if (this.loop){window.requestAnimFrame(this.process)}

    };

    this.init();
    window.requestAnimFrame(this.process);
};
Scene.prototype.render = function render(){};
Scene.prototype.update = function update(){};
Scene.prototype.init = function init(){};

