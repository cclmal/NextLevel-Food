// ! Ejemplo de archivo para BACKEND que usa Cloudinary,
// ! para subir imagenes.

// import { v2 as cloudinary } from 'cloudinary';

// if (!process.env.CLOUDINARY_CLOUD_NAME) {
//   throw new Error('CLOUDINARY_CLOUD_NAME is not set');
// }

// if (!process.env.CLOUDINARY_API_KEY) {
//   throw new Error('CLOUDINARY_API_KEY is not set');
// }

// if (!process.env.CLOUDINARY_API_SECRET) {
//   throw new Error('CLOUDINARY_API_SECRET is not set');
// }

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// ! Posible Middleware en una ruta tipo POST

// export async function uploadImage(req, res, next) {
// const { image } = req.body
//   const imageData = await image.arrayBuffer();
//   const mime = image.type;
//   const encoding = 'base64';
//   const base64Data = Buffer.from(imageData).toString('base64');
//   const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
//   const result = await cloudinary.uploader.upload(fileUri, {
//     folder: 'onwards-foodies',
//   });
//   req.imageUrl = result.secure_url;
//   next()
// }
