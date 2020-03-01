module.exports = function (grunt) {
    grunt.initConfig({
        jasmine: {
            test: {
                src: ['node_modules/axe-core/axe.js', 'src/**/*.js'],
                options: {
                    specs: 'spec/**/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine']);
};
