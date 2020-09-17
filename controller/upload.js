const path = require('path');
const fs = require('fs');

const main = async function(ctx) {
  const imgDir = 'photos/';
  const filePaths = [];
  const files = ctx.request.files || {};
  for (let key in files) {
    const file = files[key];
    // const writeName = new Date().getTime();

    const filePath = path.join(__dirname, `../${imgDir}${file.name}`);
    // const reader = fs.createReadStream(file.path);
    // const writer = fs.createWriteStream(filePath);
    // reader.pipe(writer);
    const imgBuffer = fs.readFileSync(file.path)
    fs.writeFileSync(filePath, imgBuffer)
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

module.exports = main;