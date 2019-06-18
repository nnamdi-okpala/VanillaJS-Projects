import SoulEngine from "../soul_engine/engine.js";
import { Boa } from "../soul_engine/lib/boa.js";
const width= 800,height=500;
var scene = new SoulEngine.Scene(width,height), context= scene.context;


function draw(){
    context.fillStyle='#808000';
    context.fillRect(0,0,innerWidth,innerHeight);
}

draw()
