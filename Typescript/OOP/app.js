var Child = /** @class */ (function () {
    function Child() {
        this.education = "Engineering";
    }
    Child.prototype.display = function () {
        console.log("Completed education in " + this.education);
    };
    return Child;
}());
new Child().display();
