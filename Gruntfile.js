module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {'lib/<%= pkg.name %>.js': 'src/<%= pkg.name %>.coffee'}
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - <%= pkg.authors %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'lib/<%= pkg.name %>.js',
        dest: 'lib/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'stylesheets/<%= pkg.name %>.css': 'src/<%= pkg.name %>.sass'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.coffee', 'src/*.sass'],
        tasks: ['coffee', 'sass', 'uglify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['coffee', 'sass', 'uglify']);

};
