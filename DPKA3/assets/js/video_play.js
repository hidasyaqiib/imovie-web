
var videoList = [
    
    {
      sources: [
        {
          src: "https://youtu.be/P1HfovIccgw?feature=shared",
          type: "video/youtube"
        }
      ],
      poster: "/assets/images/bg_movie/1.jpg"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/bunny/poster.png"
    },
    {
      sources: [
        {
          src: "https://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://vjs.zencdn.net/v/oceans.png"
    },
   
   
  ];
  
  var player = videojs(document.querySelector("video"), {
    //inactivityTimeout: 0 // HIDE OR NOTE CONTROL BAR
  });
  try {
    // try on ios
    player.volume(1);
    // player.play();
  } catch (e) {}
  //player.playlist(videoList;
  
  player.playlist(videoList);
  
  document.querySelector(".previous").addEventListener("click", function() {
    player.playlist.previous();
  });
  document.querySelector(".next").addEventListener("click", function() {
    player.playlist.next();
  });
  document.querySelector(".jump").addEventListener("click", function() {
    player.playlist.currentItem(2); // play third
    player.play();
  });
  
  player.playlist.autoadvance(0); // play all
  
  Array.prototype.forEach.call(
    document.querySelectorAll("[name=autoadvance]"),
    function(el) {
      el.addEventListener("click", function() {
        var value = document.querySelector("[name=autoadvance]:checked").value;
        //alert(value);
        player.playlist.autoadvance(JSON.parse(value));
      });
    }
  );
  
  /* ADD PREVIOUS */
  var Button = videojs.getComponent("Button");
  
  // Extend default
  var PrevButton = videojs.extend(Button, {
    //constructor: function(player, options) {
    constructor: function() {
      Button.apply(this, arguments);
      //this.addClass('vjs-chapters-button');
      
      /* FONT AWESOME ICON PREVIOUS NEXT */
      // this.addClass("icon-angle-left");
      // this.controlText("Previous");
      
      /* NEW VIDEOJS ICON PREV NEXT */
      this.addClass("vjs-icon-previous-item");
      this.controlText("Previous");
      
    },
  
    // constructor: function() {
    //   Button.apply(this, arguments);
    //   this.addClass('vjs-play-control vjs-control vjs-button vjs-paused');
    // },
  
    // createEl: function() {
    //   return Button.prototype.createEl('button', {
    //     //className: 'vjs-next-button vjs-control vjs-button',
    //     //innerHTML: 'Next >'
    //   });
    // },
  
    handleClick: function() {
      console.log("click");
      player.playlist.previous();
    }
  });
  
  /* ADD BUTTON */
  //var Button = videojs.getComponent('Button');
  
  // Extend default
  var NextButton = videojs.extend(Button, {
    //constructor: function(player, options) {
    constructor: function() {
      Button.apply(this, arguments);
      //this.addClass('vjs-chapters-button');
  
      /* FONT AWESOME ICON PREVIOUS NEXT */
      // this.addClass("icon-angle-right");
      // this.controlText("Next");
      
      /* NEW VIDEOJS ICON PREV NEXT */
      this.addClass("vjs-icon-next-item");
      this.controlText("Next");
    },
  
    handleClick: function() {
      console.log("click");
      player.playlist.next();
    }
  });
  
  // Register the new component
  videojs.registerComponent("NextButton", NextButton);
  videojs.registerComponent("PrevButton", PrevButton);
  //player.getChild('controlBar').addChild('SharingButton', {});
  player.getChild("controlBar").addChild("PrevButton", {}, 0);
  player.getChild("controlBar").addChild("NextButton", {}, 2);
  //player.controlBar.addChild('SharingButton', {}, 6);
  
  //var MyButton = player.controlBar.addChild(new MyButtonComponent(), {}, 6);
  
  //const ControlBar = videojs.getComponent('ControlBar');
  //ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 1, 0, 'SharingButton');
  
  // Register the new component
  //videojs.registerComponent('SharingButton', SharingButton);
  //player.getChild('controlBar').addChild('SharingButton', {});
  