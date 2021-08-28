const fs = require('fs').promises;

async function myFunction() {
    await fs.readFile('', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return
      }
      console.log(data);
    });
}

// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return
//   }
//   console.log(data);
// });

myFunction()