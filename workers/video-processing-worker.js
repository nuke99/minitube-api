var PythonShell = require('python-shell');


module.exports = function processBegin() {

    var options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: __dirname+'/../_video-processing-scripts/',
        args: []
      };

    PythonShell.run('video_process.py',options, function (err) {
        if (err) 
            throw err;
            return false
        
        return 'finished';

    });
    

    // return 'hello from separate process!';
};
