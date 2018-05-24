import gulp = require('gulp');
import {createProject} from 'gulp-typescript';
import * as sourceMaps from 'gulp-sourcemaps'

gulp.task(`compile`, [`copy`], function () {
    const tsProject = createProject(`tsconfig.json`);

    return gulp.src(`source/**/*.ts`)
        .pipe(sourceMaps.init())
        .pipe(tsProject())
        .on(`error`, () => {
            process.exit(1)
        })
        .pipe(sourceMaps.write(`../maps`))
        .pipe(gulp.dest(`build/local`));
});


gulp.task(`copy`, function () {
    return gulp.src(`source/globals.d.ts`).pipe(gulp.dest(`build/local`))
});