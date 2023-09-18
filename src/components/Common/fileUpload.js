import AWS from 'aws-sdk';

const acl = 'public-read'; 
// Importing AWS Access Key & Secret Key from .env file
AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
    region: "ap-south-1",
  });

// This function will upload image ti S3 Server
export const upload = async (file) => { 
    try{
        console.log(file);
        // initializing S3 
        const s3 = new AWS.S3();
        const params = {
            Bucket: "upload-artifacts-medic",
            Key: file.name,
            Body: file,
            ACL: acl,
            ContentType: "image/png",
          };

        // uploading file to s3 server
        const response = await s3.upload(params).promise();
        console.log("uploaded", response.Location);
        // returning response/path of the file that was uploaded to s3
        return response.Location;
    }catch(error){
        // if any wrrors comes
        console.log(error);
    }
}

// This function will validate the file, allowed extension & filesize etc...
export const validateImage = (file, allowedExtensions, maxSize) => {
    // if file is not present return an error message
    if(!file){
        return "please select an image";
    }
    
    console.log(file[0].size);
    console.log(allowedExtensions);
  
    // extracting file extension from filename
    const fileExtension = file[0] &&  file[0].name.split('.').pop().toLowerCase();
    console.log(fileExtension);
    console.log( allowedExtensions.includes(fileExtension));
    
    // checking valid file extesnion
    if(!allowedExtensions.includes(fileExtension)){
        return 'invalid file type';
    }
    
    // returns an error id filesize exceeds
    if(file[0].size > maxSize){
        return 'image size exceeeded';
    }

    // returns true if all the validation passess
    return true;
}
