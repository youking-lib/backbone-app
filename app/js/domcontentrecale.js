define(function(){

    function recale(designWidth){
        this.designWidth = designWidth / 100 || 7.5;
    };
    recale.prototype = {
        constructor: recale,
        init: function(){
            var This = this;
            var recaleEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

            window.addEventListener(recaleEvent, function(){
                This.reLoad()
            }, false);

            $(function(){
                This.reLoad();
            })
        },
        reLoad: function(){
            document.documentElement.style.fontSize = document.documentElement.clientWidth / this.designWidth + 'px';
        }
    }
    return recale;

});