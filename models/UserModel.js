const UserSchema = require('../schemas/UserSchema');
const UserModel = {};
const sha1 = require('sha1');




UserModel.getAll = () => {
    return UserSchema.findAll();
}

UserModel.create = (user => {
    return UserSchema.create({
        name : user.name,
        email : user.email,
        password : _passwordHashGen(user.password),
        guest_token_id : user.token.id,
        status : user.status || 'inactive'
    })
})


UserModel.truncate = () => {
    return UserSchema.destroy({
        where: {},
        truncate: false
    })
}

UserModel.findUserByID = (user_id) => {
    return UserSchema.findOne({
        where : {
            id : user_id
        }
    })
}

UserModel.authenticate = (email,password) => {
    return UserSchema.findOne({
        where : {
            email : email , 
            password : _passwordHashGen(password)
        }
    })
}



const _passwordHashGen = (password) => {
    return sha1(sha1(password));
}

module.exports = UserModel;