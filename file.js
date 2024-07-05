const fs = require('fs');

// reading files
fs.readFile('./documents/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

// console.log('last line');

// writing files
fs.writeFile('./documents/blog.txt', 'hello, world', () => {
  console.log('I have written a file');
});

fs.writeFile('./documents/blog2.txt', 'hello, again', () => {
  console.log('I have written a file');
});

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./documents/deleteme.txt')) {
  fs.unlink('./documents/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}