$(document)
    .ready(function() {
		$('ul.sf-menu').superfish({
                  delay: 1000,
                  animation: {
                      opacity: 'show',
                      height: 'show'
                  },
                  speed: 'normal',
                  autoArrows: false                  
              });
});