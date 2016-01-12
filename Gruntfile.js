module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    sass: {
      tasks: {
        files: {
          'dist/assets/css/font-awesome.css': '<%= vendor %>/fontawesome/scss/font-awesome.scss',
          'dist/assets/css/foundation.css': 'scss/foundation.scss',
        }
      }
    },
    uglify: {
        static_mappings: {
          files: [

            {src: '<%= vendor %>/jquery/dist/jquery.js', dest: '../assets/build/js/jquery.min.js'},

            {src: '<%= vendor %>/foundation/js/foundation.js', dest: '../assets/build/js/foundation.min.js'},

            {src: '<%= vendor %>/foundation/js/vendor/fastclick.js', dest: '../assets/build/js/fastclick.min.js'},
            {src: '<%= vendor %>/foundation/js/vendor/modernizr.js', dest: '../assets/build/js/modernizr.min.js'},

            {src: '<%= vendor %>/foundation/js/foundation/foundation.abide.js', dest: '../assets/build/js/individual/foundation.abide.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.accordion.js', dest: '../assets/build/js/individual/foundation.accordion.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.alert.js', dest: '../assets/build/js/individual/foundation.alert.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.clearing.js', dest: '../assets/build/js/individual/foundation.clearing.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.dropdown.js', dest: '../assets/build/js/individual/foundation.dropdown.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.equalizer.js', dest: '../assets/build/js/individual/foundation.equalizer.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.interchange.js', dest: '../assets/build/js/individual/foundation.interchange.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.joyride.js', dest: '../assets/build/js/individual/foundation.joyride.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.js', dest: '../assets/build/js/individual/foundation.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.magellan.js', dest: '../assets/build/js/individual/foundation.magellan.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.offcanvas.js', dest: '../assets/build/js/individual/foundation.offcanvas.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.orbit.js', dest: '../assets/build/js/individual/foundation.orbit.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.reveal.js', dest: '../assets/build/js/individual/foundation.reveal.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.slider.js', dest: '../assets/build/js/individual/foundation.slider.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.tab.js', dest: '../assets/build/js/individual/foundation.tab.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.tooltipjs', dest: '../assets/build/js/individual/foundation.tooltip.min.js'},
            {src: '<%= vendor %>/foundation/js/foundation/foundation.topbar.js', dest: '../assets/build/js/individual/foundation.topbar.min.js'},

          ],
        },

      },
    copy: {
      dist: {
        files: [
          {expand:true, cwd: 'doc/assets/', src: ['**/*','!{scss,js}/**/*'], dest: 'dist/docs/assets/', filter:'isFile'},
          {expand:true, cwd: 'js/', src: ['foundation/*.js'], dest: 'dist/assets/js', filter: 'isFile'},
          {expand:true, cwd: 'scss/', src: '**/*.scss', dest: 'dist/assets/scss/', filter: 'isFile'},
          {src: 'bower.json', dest: 'dist/assets/'},
          {expand: true, flatten: true, src: ['<%= vendor %>/fontawesome/fonts/*.*'], dest: '../assets/build/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['doc/assets/img/icons/*.*'], dest: '../assets/build/images/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['dist/assets/css/*.*'], dest: '../assets/build/css/', filter: 'isFile'},

        ]
      }
    },
    cssmin: {
      tasks: {
        files: {

                '../assets/build/css/app.min.css': [
                'dist/assets/css/font-awesome.css',
                'dist/assets/css/foundation.css'
                ]
              }
        }
    },

    clean: {
      src: ['dist/','doc/'],
      filter: 'isFile'
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },
      sass: {
        files: [
                'scss/foundation.scss', 'doc/assets/**/*.scss',
              ],
        tasks: ['clean','sass','cssmin','uglify','copy'],
        options: {
          livereload:true
        }
      },
      js: {
        files: ['js/*.js', 'doc/assets/js/**/*.js'],
        tasks: ['clean','sass', 'cssmin','uglify','copy'],
        options: {livereload:true}
      },
    },

  });

    grunt.registerTask('default', ['clean','sass', 'cssmin','uglify','copy']);


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');



};
