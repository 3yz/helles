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
                options: {
                    livereload: true,
                },
                
                files: ['index.html', 'css/main.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('default', ['watch']);
};
