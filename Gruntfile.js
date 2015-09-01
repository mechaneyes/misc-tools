module.exports = function (grunt) { 
   
grunt.initConfig({
  // sass: {
  //   dev: {
  //     src: ['./*.sass'],
  //     dest: './style.css',
  //   },
  // },
  sass: {
    dev: {
      files: {
        'storePickup.css': 'style.scss'       // 'destination': 'source'
      },
    },
  },
  watch: {
    css: {
      files: ['*.scss', '*.html', '*.js'],
      tasks: ['sass'],
    },
    options: {
      livereload: true,
    },
  },
  // Javascript linting
  jshint: { 
    options: { 
      jshintrc: '.jshintrc'
    }, 
    all: [ 
      'js/src/*.js', 
      '!js/src/*.min.js'
    ] 
  }


});


 
// grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
 
// the default task can be run just by typing "grunt" on the command line
grunt.registerTask('default', ['watch', 'sass']);

};