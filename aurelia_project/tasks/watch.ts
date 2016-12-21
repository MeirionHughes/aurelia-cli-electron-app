import * as gulp from 'gulp';

import * as project from '../aurelia.json';
import build from './build';

function onChange(path) {
  console.log(`File Changed: ${path}`);
}

let refresh = gulp.series(
  build
);

let watch = function () {

  console.log(`Watching... Ctrl+C to terminate.`);
  
  gulp.watch(project.transpiler.source, refresh).on('change', onChange);
  gulp.watch(project.markupProcessor.source, refresh).on('change', onChange);
  gulp.watch(project.cssProcessor.source, refresh).on('change', onChange);
}

export default watch;
