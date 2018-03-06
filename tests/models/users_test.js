process.env.NODE_ENV = 'test'

let UserSchema = require('../../schemas/UserSchema');
let Users = require('../../models/UserModel');
let GuestToken = require('../../models/GuestTokenModel');


let chai = require('chai');
let expect = chai.expect;
// let chaiHttp = require('chai-http')

// let server = require('../../server');

// chai.use(chaiHttp);



//Clear All data 




describe('Models',() => {
    
    describe('Users',() => {
        describe('attrs',() => {
            let guest_token ;
            let user 

            //Before
            beforeEach((done) => {
                Users.truncate().then(() => {
                    GuestToken.generate().then(gtoken => {
                        // console.log(gtoken)
                        guest_token = gtoken.dataValues
                        done();
                    }).catch(error => {
                        throw error
                        done();
                    })
                })

                               
            })

            it('should create a user ',(done) => {
                
                
                let user = {
                    name : 'Treasure',
                    email : 'treasure@sampleweb.com',
                    password : 'thisisasamplepassword',
                    token : guest_token,
                    status : 'inactive'
        
                }
                
                Users.create(user).then(_user => {
                    expect(_user).to.have.property('name')
                    expect(_user).to.have.property('id')
                    expect(_user).to.have.property('email')
                    expect(_user).to.have.property('password')
                    expect(_user).to.have.property('guest_token_id')
                    expect(_user).to.have.property('status')
                    done()
                }).catch(error => {
                    throw error
                    done()
                })
            })

        })
    })
});



