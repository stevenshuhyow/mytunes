// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function(){
        if (this.length === 1){
          this.playFirst();
        }
    }, this);

    this.on('ended', function(){
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    },this);

    this.on('dequeue', function(songModel){
      this.remove(songModel);
    }, this);
  },

  playFirst: function(){
    if (this.length > 0){
      this.at(0).play();
    }
  }



});
