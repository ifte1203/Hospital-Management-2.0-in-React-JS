import AWS from 'aws-sdk';
console.log(import.meta.env.VITE_AWS_ACCESS_KEY);
AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  });
export const upload = async ( file) => {
    
    try{
        console.log(file);
        const s3 = new AWS.S3();
        const params = {
            Bucket:"upload-artifacts-medic",
            Key: file,
            Body: file,
        };

        const response = await s3.upload(params).promise();
        console.log('uploaded', response.Location);
        return response.Location;
    }catch(error){
        console.log(error);
    }
}

export const validateImage = (file, allowedExtensions, maxSize) => {
    if(!file){
        return "please select an image";
    }
  console.log(file[0].size);
  console.log(allowedExtensions);
  
    const fileExtension = file[0] &&  file[0].name.split('.').pop().toLowerCase();
    console.log(fileExtension);
   console.log( allowedExtensions.includes(fileExtension));
    if(!allowedExtensions.includes(fileExtension)){
        return 'invalid file type';
    }
    if(file[0].size > maxSize){
        return 'image size exceeeded';
    }
    return true;
}