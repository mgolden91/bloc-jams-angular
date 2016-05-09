(function(){
    function timecode(){
        return function(seconds){
            var seconds = Number.parseFloat(seconds);
            var timer = buzz.toTimer(seconds);
            
            if (Number.isNaN(seconds)){
                return '-:--';
            }
            
            return timer;
        };
    }
    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();