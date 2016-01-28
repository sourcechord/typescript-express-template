var gulp = require('gulp');

var config = {
    copyTasks: [
        {
            src: './node_modules/bootstrap/dist/**',
            dst: './public/vendor/bootstrap'
        },
        {
            src: ['./node_modules/font-awesome/css/**', './node_modules/font-awesome/fonts/**'],
            dst: './public/vendor/font-awesome',
            option: {base: './node_modules/font-awesome/'}
        }
    ]
};

gulp.task('copyLib', function() {
    return config.copyTasks.map(function(task) {
        return gulp.src(task.src, task.option)
                   .pipe(gulp.dest(task.dst));
    });
});