const request = require("request")


function notification(msg) {

    return new Promise(function(resolve, reject) {
        console.log(msg)
        request.get({
            url: 'https://api.telegram.org/bot543872133:AAFBY7TQ2pyrWNiC7646IrIZUIp1NH5Dcy8/sendMessage',
            qs: {
                chat_id: -1001293729905, 
                text: msg
            },
            agent: false  // create a new agent just for this one request
        }, (err, res) => {
            resolve('test')
        });
    })
}

module.exports = notification;
// let a = notification('test')