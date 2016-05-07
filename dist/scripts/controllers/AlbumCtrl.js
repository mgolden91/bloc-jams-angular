(function(){
    function AlbumCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songCollection = this.albumData.songs; 
        this.songPlayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
    
    
