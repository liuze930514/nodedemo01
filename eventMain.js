var a = "你好";

var b = "Hello Word !!";

console.info(a,b);

var gitFn = function() {
    console.info(123);
}

gitFn();

setTimeout(function() {
    console.info(2333);
},1000)

(function() {
    console.info("Hello Word !!!");
})();