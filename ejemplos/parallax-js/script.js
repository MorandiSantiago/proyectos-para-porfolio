var $content = document.querySelector('header .content');
     var $blur = document.querySelector('header .overlay');
     var wHeight = window.innerHeight;

     window.addEventListener('resize', function(){
         wHeight = window.innerHeight;
     });

     function onScroll() {
         var currentScrollY = window.scrollY;
         var slowScroll = currentScrollY / 2;
         var blurScroll = currentScrollY * 2;
         var opaScroll = 1.4 - currentScrollY / 400;

         $content.style.transform = 'translateY(' + slowScroll + 'px)';
         $content.style.opacity = opaScroll;

         $blur.style.opacity = blurScroll / wHeight;
     }
     window.addEventListener('scroll', onScroll);
