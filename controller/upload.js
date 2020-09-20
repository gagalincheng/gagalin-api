const path = require('path');
const fs = require('fs');

const main = async function(ctx) {
  const host = ctx.headers.host;
  const imgDir = 'static/photos/';
  const filePaths = [];
  const files = ctx.request.files || {};
  for (let key in files) {
    const file = files[key];
    const ext = file.name.substr(file.name.indexOf('.'));
    const writeName = new Date().getTime() + ext;

    const filePath = path.join(__dirname, `../${imgDir}${writeName}`);
    // const reader = fs.createReadStream(file.path);
    // const writer = fs.createWriteStream(filePath);
    // reader.pipe(writer);
    const imgBuffer = fs.readFileSync(file.path)
    fs.writeFileSync(filePath, imgBuffer)
    const cdnPath = `http://${host}/photos/${writeName}`;
    filePaths.push(cdnPath);
  }

  ctx.body = filePaths;
};

module.exports = main;