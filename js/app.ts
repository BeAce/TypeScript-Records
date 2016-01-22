/**
 * Created by beace on 2016/1/22.
 */
class Greeter{
    constructor(public greeting:string){}
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }

}
var greeter = new Greeter("Hello World!");
document.body.innerHTML = greeter.greet();