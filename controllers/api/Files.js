const express = require('express');
const router = express.Router();
const fileupload = require('express-fileupload');

router.use(fileupload());

router.post('/upload',(req,res) => {
    if(!req.files)
        return res.error('No files were uploaded');
    
        let _file = req.files.file
        


        _file.mv(__dirname+'/../../storages/file.mp4',(error) => {
            if(error) {
                return res.error("File upload failed due to an error",error);
            }
            res.success("file upload success");
        })


})


module.exports = router;