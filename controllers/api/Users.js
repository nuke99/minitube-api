const express = require('express');
const router = express.Router();
const sha1 = require('sha1');

const GuestTokenModel = require('../../models/GuestTokenModel');
const UserModels = require('../../models/UserModel');

router.get('/',(req,res) => {
    UserModels.getAll().then(users => {
        res.success(users)
    })
})


router.post('/',(req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const _token = req.header('guest-token') || null ; 
    console.log('headers',_token)

    const tokenPromis = GuestTokenModel.fetchFromToken(_token)

    tokenPromis.then(token=>  {
        if(token == null) {
            GuestTokenModel.generate().then(token => {
                _createUser(token)
            })
        }else {
            _createUser(token)
        }
    }).catch(error => {
        console.log('fetch failed due to ',error)
        res.error('Failed to create the user.',error)
    });


    const _createUser = (token) => {
        UserModels.create({
            name,
            email,
            password,
            token,
            status : 'inactive'
        }).then(user => {
            res.success('User Create Successful')

        }).catch(error => {
            res.error('Failed to create the user.',error)
        })
    }

    
});

/**
 * Create and return a guest token
 */
router.get('/guest-token',(req,res) => {
    const _rand = parseInt(Math.random() * (99999 - 10000) + 10000);
    const _timestamp = Date.now();
    const _token = sha1(_rand+_timestamp);

    GuestTokenModel.create(_token).then(() => {
        res.success(_token)
    }).catch(error => {
        console.log(error)
        res.error('Unable to create guest token',error);
    })

});

module.exports = router;