

const output = {
    success : (res,data) => {
        res.json({status:true,data});     
    },
    error : (res,data) => {
        res.json({status:false, data});
    }
}


module.exports = {
    responses : (req,res,next) => {
        res.success = (data) => {
            output.success(res,data)
        }
        res.error = (data,error) => {
            // write your logger here 
            if(process.env.NODE_ENV =='development') {
                console.log('error',error)
            }
            output.error(res,data);
            
        }
        next();
    }
}