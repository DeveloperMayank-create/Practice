//by this line various modules can be used
//we want to change name of index.txt file to 
//*** use import in place of require()
import fs from 'fs';


//function -it is a callback function
fs.rename('index.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
