module.exports = function(grunt) {
    grunt.initConfig({
  uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'js/src',
          src: '*.js',
          dest: 'js/dest/'
      }]
    }
  }
});
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};