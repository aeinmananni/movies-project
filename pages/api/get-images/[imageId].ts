import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";


// function getContentType(filePath: string): string {
//     const extension = path.extname(filePath).toLowerCase();
//     switch (extension) {
//       case ".jpg":
//       case ".jpeg":
//         return "image/jpeg";
//       case ".png":
//         return "image/png";
//       case ".gif":
//         return "image/gif";
//       case ".svg":
//         return "image/svg+xml";
//       default:
//         return "application/octet-stream";
//     }
//   }

export default function handler(req:NextApiRequest,res:NextApiResponse){
   const {imageId} = req.query;
   const file_path = path.join(process.cwd(),"./public","images",imageId as string);
   console.log(file_path,"____",imageId);
   if(!fs.existsSync(file_path)){
      return res.status(404).json({error:"Image Not Found !"});
   }
   const fileStream = fs.createReadStream(file_path);
   fileStream.pipe(res);
}