module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed',
					lineNumbers: false
				},
				files: {
		            'style.css': 'style.scss'
		        }
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', ],
				options: {
			        spawn: false,
			    }
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);
};