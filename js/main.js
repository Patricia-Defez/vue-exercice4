

new Vue({
    el: '#exercise',
    data: {
      highlight: false,
      shrink: false,
      ball:'circle',
      shape: 'enter a shape'
    },
    methods: {
      startEffect: function() {
        var vm = this; 
        setInterval(function(){
          vm.highlight= !vm.highlight;
          vm.shrink= !vm.highlight;
        }, 300)
           
      }
    }
  });
  