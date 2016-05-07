(function(){
    function PlayerBarCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songCollection = this.albumData.songs;
        this.songPlayer = SongPlayer;
        
    }
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl] )
})();