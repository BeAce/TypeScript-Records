/**
 * Created by beace on 2016/1/22.
 */
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
var greeter = new Greeter("Hello World!");
document.body.innerHTML = greeter.greet();
