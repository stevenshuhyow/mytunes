// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function(){
        if (this.length === 1){
          this.playFirst();
        }
    }, this);

    this.on('ended', function(){
      console.log(this);
      this.shift();
    },this);

  },

  playFirst: function(){
  }




});
