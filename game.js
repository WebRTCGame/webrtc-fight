var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    mouse = utils.captureMouse(canvas);

var hashCanvas = new Hashmap();
hashCanvas.addCanvas = function(key) {
    hashCanvas.add(key, document.createElement('canvas'));
    hashCanvas.get(key).ctx = hashCanvas.get(key).getContext('2d');
    hashCanvas.get(key).flip = function(){context.drawImage(hashCanvas.get(key),0,0)};
    hashCanvas.get(key).drawn = false;
    return hashCanvas.get(key);
};

//console.log(hashCanvas.addCanvas("meeow"));
hashCanvas.addCanvas("meeow");
console.log(hashCanvas.get("meeow"));

/*
hashCanvas.prototype.addCanvas = function(key){
    var tempcanvas = document.createElement('canvas');
    tempcanvas.context = tempcanvas.getContext('2d');
    
    this.add(key,tempcanvas);
    //this.get(key).prototype.context = this.get(key).getContext('2d');
    };
hashCanvas.addCanvas("booger");
*/
        var diagram = document.getElementById('diagram'),
            output = document.getElementById('output'),
            count = 0,
        log = function() {
                var message = Array.prototype.slice.apply(arguments);
                output.value = count+++': ' + message.join(', ') + '\n' + output.value;
                //var timeoutID = window.setTimeout(function(){}, 1000);
            };

        var docount = function() {

            for (var i = 2; i > -1; i--) {
                log(i);
            }

        };

var gameState = Stately.machine({
      'STOPPED': {
          play: function() {
              docount();
              return this.PLAYING;
          },
          init: function() {
              return this.INITIALLOADING;
          }
      },
      'INITIALLOADING': {
          cutscene: function() {
              return this.CUTSCENE;
          },
          next: function() {
              return this.CUTSCENE;
          }
      },

      'CUTSCENE': {
          gamemenu: function() {
              return this.GAMEMENU;
          },
          next: function() {
              return this.GAMEMENU;
          }
      },
      'GAMEMENU': {
          instructions: function() {
              return this.INSTRUCTIONS;
          },
          settings: function() {
              return this.SETTINGS;
          },
          play: function() {
              return this.CHARACTERSELECT;
          },
          next: function() {
              return this.CHARACTERSELECT;
          }
      },
      'INSTRUCTIONS': {
          gamemenu: function() {
              return this.GAMEMENU;
          },
          back: function() {
              return this.GAMEMENU;
          }
      },
    'SETTINGS': {
        videoconfig: function() {
            return this.VIDEOCONFIG;
        },
        audioconfig: function() {
            return this.AUDIOCONFIG;
        },
        credits: function() {
            return this.CREDITS;
        },
        highscore: function() {
            return this.HIGHSCORE;
        },
        gamemenu: function() {
            return this.GAMEMENU;
        },
        back: function() {
            return this.GAMEMENU;
        }
    },
    'VIDEOCONFIG': {
        settings: function() {
            return this.SETTINGS;
        },
        back: function() {
            return this.SETTINGS;
        }
    },
    'AUDIOCONFIG': {
        settings: function() {
            return this.SETTINGS;
        },
        back: function() {
            return this.SETTINGS;
        }
    },
    'CREDITS': {
        settings: function() {
            return this.SETTINGS;
        },
        back: function() {
            return this.SETTINGS;
        }
    },
    'HIGHSCORE': {
        settings: function() {
            return this.SETTINGS;
        },
        back: function() {
            return this.SETTINGS;
        }
    },
    'CHARACTERSELECT': {
        //settings: function(){return this.SETTINGS},
        back: function() {
            return this.GAMEMENU;
        },
        play: function(){
            return this.PLAY;
        }
    },
     'PLAY': {
        //settings: function(){return this.SETTINGS},
        back: function() {
            return this.GAMEMENU;
        }
    },
    'PLAYING': {
        stop: function() {
            docount();
            return this.STOPPED;
        },
        pause: function() {
            docount();
            return this.PAUSED;
        }
    },
    'PAUSED': {
        play: function() {
            docount();
            return this.PLAYING;
        },
        stop: function() {
            docount();
            return this.STOPPED;
        }
    },
    'RESET': {
       reset: function(){return this.INITIALLOADING}
    }
}).bind(function (event, oldState, newState) {

    var transition = oldState + ' => ' + newState;

    switch (transition) {
        /*
        ...
        case 'STOPPED => PLAYING':
        case 'PLAYING => PAUSED':
        ...
        */
        default:
            log(transition);
            break;
    }
});
gameState["onbefore"+"INITIALLOADING"] = function (event, oldState, newState) {
    log("onbeforeINITIALLOADING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState); 
    context.clearRect (0 , 0 , canvas.width , canvas.height );
    context.fillText("Preload", 10, 50);
    
};
gameState["onenter"+"INITIALLOADING"] = function (event, oldState, newState) {
    log("onenterINITIALLOADING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);  
    context.clearRect (0 , 0 , canvas.width , canvas.height );
    context.fillText("Loading", 10, 50);
    
};
gameState["onleave"+"INITIALLOADING"] = function (event, oldState, newState) {
    log("onleaveINITIALLOADING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
    context.clearRect (0 , 0 , canvas.width , canvas.height );
    context.fillText("Done Loading", 10, 50);
    
};


gameState["onbefore"+"STOPPED"] = function (event, oldState, newState) {
    log("onbeforeStopped" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState); 
};
gameState["onenter"+"STOPPED"] = function (event, oldState, newState) {
    log("onenterStopped" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);   
};
gameState["onleave"+"STOPPED"] = function (event, oldState, newState) {
    log("onleaveStopped" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["on"+"STOPPED"] = function (event, oldState, newState) {
    log("onStopped" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onbefore"+"PLAYING"] = function (event, oldState, newState) {
    log("onbeforePLAYING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onenter"+"PLAYING"] = function (event, oldState, newState) {
    log("onenterPLAYING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onleave"+"PLAYING"] = function (event, oldState, newState) {
    log("onleavePLAYING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["on"+"PLAYING"] = function (event, oldState, newState) {
    log("onPLAYING" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onbefore"+"PAUSED"] = function (event, oldState, newState) {
    log("onbeforePAUSED" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onenter"+"PAUSED"] = function (event, oldState, newState) {
    log("onenterPAUSED" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["onleave"+"PAUSED"] = function (event, oldState, newState) {
    log("onleavePAUSED" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};
gameState["on"+"PAUSED"] = function (event, oldState, newState) {
    log("onPAUSED" + " event: " + event + " / oldState:" + oldState + " / newState: " + newState);
};




function start() {
    console.log("start");

    draw = function() {

        update();
        render();
        window.requestAnimFrame(draw);

    };

    setup();
    window.requestAnimFrame(draw);
};

var setup = function setup(){
    //gameState.play().pause().play().pause().stop();
gameState.stop().init().next().next().settings().videoconfig().back().back().play().back();
};

var update = function update(){
   // console.log(gameState.getMachineState());
   // console.log(gameState.getMachineState() === "GAMEMENU");
     /*
    if (gameState.getMachineState() === 'GAMEMENU'){
        gameState.settings();
    }
   
    switch (gameState.getMachineState()) {
  case "PLAY":
    document.write("Oranges are $0.59 a pound.<br>");
    break;
  case "Apples":
    document.write("Apples are $0.32 a pound.<br>");
    break;
  case "Bananas":
    document.write("Bananas are $0.48 a pound.<br>");
    break;
  case "Cherries":
    document.write("Cherries are $3.00 a pound.<br>");
    break;
  case "Mangoes":
  case "Papayas":
    document.write("Mangoes and papayas are $2.79 a pound.<br>");
    break;
  default:
    document.write("Sorry, we are out of "  + ".<br>");
}
*/
};

var render = function render(){};

window.requestAnimFrame = (function() {
    'use strict';
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

/*
storedCanvas = document.createElement('canvas');

Then you can paint an entire canvas to that canvas:

storedCtx.drawImage(firstCanvas, 0, 0);

Then you can do whatever you want to the first canvas, the stored one won't change. Then, when you want to recall that, you just do

firstCanvasCtx.drawImage(storedCanvas, 0, 0);
*/