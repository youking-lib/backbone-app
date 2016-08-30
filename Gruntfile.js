module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            // 拷贝bootstrap
            bootstrap: {
                files: [
                    // includes files within path 
                    // {expand: true, src: ['app/*', 'app/style/*'], dest: '.tmp/', filter: 'isFile'},

                    // includes files within path and its sub-directories 
                    {expand: true, cwd: 'app/vender/bootstrap/', src: ['less/**/*.less'], dest: 'app/style/', filter: 'isFile'},

                    // makes all src relative to cwd 
                    // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                    // flattens results to a single level 
                    // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ]
            },
            fontawesome: {
                files: [
                    {
                        expand: true, cwd: 'app/vender/font-awesome/', src: ['fonts/*'], dest: 'app/'
                    }
                ]
            }
            // seajs: {
            //     files:[ 
            //         {
            //             expand: true, cwd: 'app/vender/examples/', src: ['sea-modules/gallery/**/*', 'sea-modules/seajs/**/*'], dest: 'app/vender/'
            //         }
            //     ]
            // }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            main: {
                files: {
                    'test/main.js': ['app/main.js']
                }
            }
        },
        less: {
            development: {
                files: {
                    'app/style/main.css': 'app/style/less/_main.less'
                }
            }
        },
        browserSync: {
            bsFiles: {
                src : 'app/**/*'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['copy', 'uglify', 'less', 'browserSync']);
}