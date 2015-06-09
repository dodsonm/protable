/*jshint strict:false, indent: 2, camelcase: false */

/**
 * grunt-image-embed
 * This task converts all data found within a stylesheet (those within a
 * url( ... ) declaration) into base64-encoded data URI strings. This includes
 * images and fonts.
 *
 * https://github.com/ehynds/grunt-image-embed
 */
module.exports = function (grunt) {
  grunt.config('imageEmbed', {
    dist: {
      src: ['./public/stylesheets/index.css'],
      dest: './public/stylesheets/index.css',
      options: {
        baseDir: './public', //for absolute image path resolution
        regexInclude: /\.(png|svg)/gi,
        regexExclude: /fonts\/.*\.svg/gi
      }
    }
  });
  grunt.loadNpmTasks('grunt-image-embed');
};
