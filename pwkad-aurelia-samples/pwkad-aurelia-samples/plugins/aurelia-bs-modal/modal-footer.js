if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var ModalFooter = (function () {
        function ModalFooter() {
            this.buttons = [];
        }
        __decorate([
            aurelia_framework_1.bindable
        ], ModalFooter.prototype, "buttons");
        return ModalFooter;
    })();
    exports.ModalFooter = ModalFooter;
});
//# sourceMappingURL=modal-footer.js.map