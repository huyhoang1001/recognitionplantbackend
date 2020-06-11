const gc = require('../config/google-cloud')
const bucket = gc.bucket(`recognitionimageplant.appspot.com`)
const UUID = require("uuid-v4");
/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file, typePlant, plant) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file
  let blob;

  if (!plant) {
    blob = bucket.file(`imagePost/${typePlant}/` + originalname.replace(/ /g, "_"))
  }
  else {
    blob = bucket.file(`imagePost/${typePlant}/${plant}/` + originalname.replace(/ /g, "_"))
  }

  let uuid = UUID();

  const metadata = {
    contentType: file.mimetype,
    metadata: {
      firebaseStorageDownloadTokens: uuid
    }
  };

  const blobStream = blob.createWriteStream({
    metadata: metadata,
    resumable: false
  });

  blobStream.on('finish', () => {
    const publicUrl = "https://firebasestorage.googleapis.com/v0/b/" +
      bucket.name + "/o/" + encodeURIComponent(blob.name) + "?alt=media&token=" + uuid
    resolve(publicUrl)
  })
    .on('error', (err) => {
      console.log('error: ', err)
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
})

const uploadImagePlant = (file, plant) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file
  let blob = bucket.file(`plant/${plant}/` + originalname.replace(/ /g, "_"))
  let uuid = UUID();

  const metadata = {
    contentType: file.mimetype,
    metadata: {
      firebaseStorageDownloadTokens: uuid
    }
  };

  const blobStream = blob.createWriteStream({
    metadata: metadata,
    resumable: false
  });

  blobStream.on('finish', () => {
    const publicUrl = "https://firebasestorage.googleapis.com/v0/b/" +
      bucket.name + "/o/" + encodeURIComponent(blob.name) + "?alt=media&token=" + uuid
    resolve(publicUrl)
  })
    .on('error', (err) => {
      console.log('error: ', err)
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
})

module.exports = {
  uploadImage,
  uploadImagePlant
} 