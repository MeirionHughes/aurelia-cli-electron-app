import * as gulp from 'gulp';

import * as project from '../aurelia.json';
import build from './build';
import { CLIOptions } from 'aurelia-cli';

import * as childProcess from 'child_process';
import * as electron from 'electron';


function onChange(path) {
  console.log(`File Changed: ${path}`);
}

let serve = gulp.series(
  build,
  done => {
    childProcess
      .spawn(electron, ["."], {
        stdio: 'inherit'
      })
      .on("close", () => {
        // User closed the app. Kill the host process.
        process.exit();
      })

    done();
  }
);

let refresh = gulp.series(
  build
);

let watch = function () {
  gulp.watch(project.transpiler.source, refresh).on('change', onChange);
  gulp.watch(project.markupProcessor.source, refresh).on('change', onChange);
  gulp.watch(project.cssProcessor.source, refresh).on('change', onChange);
}

let run;

if (CLIOptions.hasFlag('watch')) {
  run = gulp.series(
    serve,
    watch,
  );
} else {
  run = serve;
}

export default run;
