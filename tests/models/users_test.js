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
Users.truncate().then(() => {
    
})



describe('Models',() => {
    
    describe('Users',() => {
        describe('attrs',() => {
            let guest_token ;
            let user ;

            //Before
            beforeEach((done) => {
                GuestToken.generate().then(gtoken => {
                    // console.log(gtoken)
                    guest_token = gtoken.dataValues
                    done();
                }).catch(error => {
                    throw error
                    done();
                })

                               
            })

            it('should create a user ',(done) => {
                let create_user = {
                    name : 'Treasure',
                    email : 'treasure@sampleweb.com',
                    password : 'thisisasamplepassword',
                    token : guest_token,
                    status : 'inactive'
        
                }                
                Users.create(create_user).then(_user => {
                    user = _user.dataValues
                    expect(_user).to.have.property('name')
                    expect(_user).to.have.property('id')
                    expect(_user).to.have.property('email')
                    expect(_user).to.have.property('password')
                    expect(_user).to.have.property('guest_token_id')
                    expect(_user).to.have.property('status')
                    expect(_user.password).to.equal('d7432b084eda3ad96b53aa55e0c06f42212b14bd')
                    
                    done()
                }).catch(error => {
                    throw error
                    done()
                })
            })

            it('should fetch the user', (done) => {
                
                Users.findUserByID(user.id).then(_user => {
                    expect(_user).to.have.property('name')
                    expect(_user).to.have.property('id')
                    expect(_user).to.have.property('email')
                    expect(_user).to.have.property('password')
                    expect(_user).to.have.property('guest_token_id')
                    expect(_user).to.have.property('status')
                    expect(_user.password).to.equal('d7432b084eda3ad96b53aa55e0c06f42212b14bd')
                    done();
                })


            })

        })
    })
});



