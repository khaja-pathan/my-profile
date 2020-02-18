module.exports.sendRsp = function(res, status, msg) {
    const output =  {};
    output.response = res ? res :{};
    output.status = status ? status :'';
    output.msg = msg ? msg:'';
    // res.send(output);
    res.status(status);
    res.end({output});
}