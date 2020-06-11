// import { v4 as uuidv4 } from 'uuid';
// import { Storage } from '@google-cloud/storage';
// import { IErrorService } from './error';

//   private keyFilename: string;
//   private projectId: string;
//   private bucketName: string;
//   private storage: any;
//   private bucket: any;


// this.keyFilename = './ecommerce-intern-firebase-adminsdk-becnn-10212b7450.json';
// this.projectId = 'ecommerce-intern';
// this.bucketName = `${this.projectId}.appspot.com`;
// this.storage = new Storage({
//     projectId: this.projectId,
//     keyFilename: this.keyFilename
// });
// this.bucket = this.storage.bucket(this.bucketName);

// async updateImage(params: {
//     files: Array < any >,
//     _id: string
// }) {
//     const { files, _id } = params;

//     return new Promise((resolve, reject) => {
//         let urls: Array<string> = [];

//         if (!files) {
//             reject('No image file');
//         }

//         files.forEach(file => {
//             // file name in cloud
//             let fileName = Date.now();
//             // create path 
//             let fileUpload = this.bucket.file(`/BookImages/${_id}/` + fileName);
//             // upload image
//             let uuid = uuidv4();

//             const metadata = {
//                 contentType: file.mimetype,
//                 metadata: {
//                     firebaseStorageDownloadTokens: uuid
//                 }
//             };

//             const blobStream = fileUpload.createWriteStream({
//                 metadata: metadata,
//                 resumable: false
//             });

//             blobStream.on('error', (error: string) => {
//                 this._iErrorService.firebase.requestFireBaseInvalid(error);
//             });

//             blobStream.on('finish', () => {
//                 urls.push(this.getPublicUrl({
//                     fileName,
//                     _id,
//                     uuid
//                 }));

//                 if (urls.length === files.length) {
//                     resolve(urls);
//                 }
//             });

//             blobStream.end(file.buffer);
//         });
//     });
// }

// getPublicUrl(params: {
//     fileName: number,
//     _id: string,
//     uuid: any
// }) {
//     const { fileName, _id, uuid } = params;
//     //return `https://storage.googleapis.com/${bucketName}/ProductImages/${productID}/${filename}`;
//     return (
//         'https://firebasestorage.googleapis.com/v0/b/' +
//         this.bucketName +
//         '/o/' +
//         encodeURIComponent(`/BookImages/${_id}/` + fileName) +
//         '?alt=media&token=' +
//         uuid
//     );
// }