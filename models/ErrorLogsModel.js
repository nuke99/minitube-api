
const ErrorLogsSchema = require('../schemas/ErrorLogsSchema');
const ErrorLogs = {};


ErrorLogs.create = (_error) => {
    return ErrorLogsSchema.create(_error)
}


module.exports = ErrorLogs;