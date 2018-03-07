process.env.NODE_ENV = 'test'

let ErrorLogsSchema = require('../../schemas/ErrorLogsSchema');
let ErrorLogModel = require('../../models/ErrorLogsModel');


let chai = require('chai');
let expect = chai.expect;


//Clear All data 


describe('Error Logs',() => {
    
    describe('Logs',() => {
        describe('attrs',() => {

            it('Should make the error',(done) => {
                let _error = {
                    type : 'error',
                    data : 'This is sample error code '
                }
                ErrorLogModel.create(_error).then(error => {
                    if(error != null) {
                        done();
                    }
                }).catch(error => {
                    throw error
                    done();
                })
            })
        })
    })
});



