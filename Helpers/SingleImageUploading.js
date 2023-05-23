const mv = require('mv');

exports.SingleImageUploading =(file)=> {
    const path=`${process.env.FILE_UPLOAD_PATH}/${file.name}`;
    file.mv(path,err=>{
        if(err){
           return err;
        }
        console.log('file Uploaded')
    })
}
