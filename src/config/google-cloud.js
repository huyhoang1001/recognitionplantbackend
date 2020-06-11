const Cloud = require('@google-cloud/storage');
const path = require('path');

const serviceKey = path.join(__dirname, './keyFirebase.json');
const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'recognitionimageplant',
})

module.exports = storage