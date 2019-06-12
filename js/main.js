

new Vue({
    el: '#exercise',
    data: {
      highlight: false,
      shrink: false,
      ball:'circle',
      shape: 'enter a shape',
      shape2: 'enter another shape',
      color: 'true or false'
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
  