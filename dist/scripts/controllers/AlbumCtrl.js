(function(){
    function AlbumCtrl(){
        this.albumData = angular.copy(albumPicasso);
        this.songCollection = this.albumData.songs;   
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
    
    
