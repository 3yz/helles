module.exports = function(grunt) {  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            options: {
                sassDir: 'public/scss',
                cssDir: 'public/css',
                imagesDir: 'public/imgs',
                fontsDir: 'public/fonts',
                relativeAssets: true
            },

            dev: {
                options: {
                    outputStyle: 'expanded',
                    trace: true
                }
            },

            dist: {
                options: {
                    environment: 'production',
                    force: true
                }
            }
        },

        watch: { 
            compass: {
                files: 'public/scss/{,*/}*.{scss,sass}',
                tasks: ['compass:dev'],
                options: {
                  nospawn: true
                }
            },           
            livereload: {
                files: [ 'public/css/main.css', 'public/js/main.js' ],
                options: {
                  livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['watch']);
};
