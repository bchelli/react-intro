# React Intro
This is a React introduction.

## How it works?
Follow the step by step tutorial by switching branches.

## Step 1 - Initialization of the repository
### 1) Install dependencies
```bash
npm install --save react@0.14.0
npm install --save-dev gulp browserify babelify vinyl-source-stream
```

### 2) Build script
Create ./gulpfile.js with the following content
```javascript
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'app/main.js',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
```

### 3) Create your first React file
Create ./app/main.js with the following content
```javascript
import React from 'react';

React.render(
  <h1>Hello World</h1>,
  document.getElementById('react-root')
);
```

### 4) Create the index.html
Create ./dist/index.html with the following content
```html
<!DOCTYPE html>
<html>
	<body>
		<div id="react-root"></div>
		<script type="text/javascript" src="./js/bundle.js"></script>
	</body>
</html>
```

### 5) Run
```bash
npm run build
open dist/index.html
```
