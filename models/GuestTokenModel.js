const sha1 = require('sha1');
const GuestTokenSchema = require('../schemas/GuestTokenSchema');
const GuestTokenModel = {};


GuestTokenModel.create = (token) => {
    return GuestTokenSchema.create({token : token});
}

GuestTokenModel.generate = () => {
    const _rand = parseInt(Math.random() * (99999 - 10000) + 10000);
    const _timestamp = Date.now();
    const _token = sha1(_rand+_timestamp);
    return GuestTokenModel.create(_token);

}


GuestTokenModel.fetchFromToken = (token) => {
    return GuestTokenSchema.findOne({
        where : {
            token : token
        }
    })
}


module.exports = GuestTokenModel;