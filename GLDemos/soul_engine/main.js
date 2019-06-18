import Scene from "./scene.js";
import Boa from "./lib/boa.js";

var SoulEngine;
/**
 * @namespace {SoulEngine} // Use the namespace to create an engine;
 * @package {Boa} // Use this pacakage to work with matricies and vector 
 * @deprecated {Boa} //Do not use this namespace import from package directly 
 * @var {Path} //A 2D MeshObject not extended from the Mesh Constructor,but similar to it
 *             Use this to draw 2d representation on to a 3D Plane 
 *  
 * TODO:
 *  @var {Mesh} 
 * Mesh can take a Vector or Matrix Object as an argument to be rendered onto  the Scene
 */

(function (SoulEngine){  "use strict"
    SoulEngine.Scene=Scene;
    var MESH = (function () {
        function Mesh (count){
            this.verticies= new Array(count);
            this.vertexBuffer = [];
            return "{"+this.Verticies+","+this.vertexBuffer+"}"
        };
        return Mesh;
    })();
    SoulEngine.MESH = MESH;
    
    var Path= (function (){
        function Path() {
            this.vertices = new Array(2);   
        }
        return Path;
    })();
    SoulEngine.Path=Path;
    
})(SoulEngine = {})

export default SoulEngine;
