const express = require('express');
const router = express.Router();
const fileupload = require('express-fileupload');
const cryptoRandomString = require('crypto-random-string');


router.use(fileupload());

router.post('/upload',(req,res) => {
    if(!req.files)
        return res.error('No files were uploaded');
    
        let _file = req.files.file

        let _file_name = Date.now()+'_'+cryptoRandomString(10)+'.mp4'

        _file.mv(__dirname+'/../../storages/videos/'+_file_name,(error) => {
            if(error) {
                return res.error("File upload failed due to an error",error);
            }
            const _res = {
                file_name : _file_name,
                full_path : '/storages/videos/'+_file_name
            }
            res.success(_res);
        });

        


})


module.exports = router;