(function(){
    function AlbumCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
        this.songCollection = this.albumData.songs;   
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
    
    
