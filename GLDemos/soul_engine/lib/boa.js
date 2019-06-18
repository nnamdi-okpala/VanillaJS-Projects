var Boa;

(function (Boa) {
    /** 
    * 
    */
    var Vector3D = (function () {
        function Vector3D(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return "{" + this.x + "," + this.y + "," + this.z + "}";
        }

        Vector3D.prototype.defineUnitVector = function (unit) {
            if (unit === "i") return new Vector3D(1, 0, 0)
            if (unit === "j") return new Vector3D(0, 1, 0)
            if (unit === "k") return new Vector3D(0, 0, 1)
        }
        Vector3D.prototype.dotProduct = function () {

        }
        Vector3D.prototype.magnitude = function () {
            var x = Math.pow(this.x), y = Math.pow(this.y), z = Math.pow(this.z);
            var sum = Math.sqrt(x + y + z)
            return sum;
        }

        Vector3D.prototype.add = function () {
            var sum = (this.x + this.y + this.z);
            return sum;
        }
        Vector3D.prototype.subtract = function () {
            var sum = (this.x - this.y - this.z);
            return sum;
        }
        Vector3D.prototype.multiplyByScalar = function (scalar) {
            var x = this.x * scalar;
            var y = this.y * scalar;
            var z = this.z * scalar;
            return new Vector3D(x, y, z)
        }
        Vector3D.prototype.crossMultiply = function (b = new Vector3D) {
            var x = this.y * b.z - this.z - b.y;
            var y = this.z * b.x - this.x * b.z;
            var z = this.x * b.y - this.y * b.x;
            return new Vector3D(x, y, z)
        }
        Vector3D.prototype.rotateX = function (theta) {
            var rad, cosa, sina, y, z
            rad = theta * MatWh.PI / 180
            cosa = Math.cos(rad)
            sina = Math.sin(rad)
            y = this.y * cosa - this.z * sina
            z = this.y * sina + this.z * cosa
            return new Vector3D(this.x, y, z);
        }
        Vector3D.prototype.rotateY = function (theta) {
            var rad, cosa, sina, x, z
            rad = theta * Math.PI / 180
            cosa = Math.cos(rad)
            sina = Math.sin(rad)
            z = this.z * cosa - this.x * sina
            x = this.z * sina + this.x * cosa
            return new Vector3D(x, this.y, z);
        }

        Vector3D.prototype.rotateZ = function (theta) {
            var rad, cosa, sina, x, y
            rad = theta * Math.PI / 180
            cosa = Math.cos(rad)
            sina = Math.sin(rad)
            x = this.x * cosa - this.y * sina
            y = this.x * sina + this.y * cosa
            return new Vector3D(x, y, this.z);
        }

        Vector3D.prototype.project = function (viewWidth, viewHeight, fov, viewDistance) {
            var factor, x, y
            factor = fov / (viewDistance + this.z)
            x = this.x * factor + viewWidth / 2
            y = this.y * factor + viewHeight / 2;
            console.log("viewWidth", viewWidth, "viewHeight", viewHeight, "fov", fov, "viewDistance", viewDistance);
            return new Vector3D(x, y, this.z);

        }
        return Vector3D
    }());
    Boa.Vector3D = Vector3D;

    var Matrix = (function () {
        function Matrix() {

        }
        return Matrix
    }())
    Boa.MatrX = Matrix
})(Boa = {})
export default Boa