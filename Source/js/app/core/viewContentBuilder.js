APP.core.viewContentBuilder = (function() {

    var self;

    function viewContentBuilder(){
        self = this;
    };

    viewContentBuilder.prototype.build = function(builder){
        return builder.build().content.join('');
    };
   
    return viewContentBuilder;

}());