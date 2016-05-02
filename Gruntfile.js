module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        files: {
          'src/css/style.css': 'src/less/style.less',
          'dev/css/style.css': 'src/less/style.less'
        }
      },
      production: {
        files: {
          'dist/css/style.css': 'src/less/style.less'
        }
      }
    },
    browserify: {
      options: {
        alias: { 
          'profile-generator': './src/js/profile-generator.js'
        },
      },
      browserifyOptions: {
        outfile: './src/js/bundle.js'
      },
      require: './src/js/script.js'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      uses_defaults: ['src/js/bundle.js'] 
    }
});

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['less']);

};