module.exports = {
  secretString: "cars3was_aMistak3",
  connect: function (db) {
    db.connect(function (err) {
      if (err) throw err;
      console.log('You are now connected...')
    })
  },
  sendGet: function (res, content) {
    if (content === '' || content === [] || content === null || content === undefined) return res.send({success: false});
    if (content['errno'] !== undefined && content['errno'] > 0) return res.send({success: 'query error!', err: content});
    return res.send({success: true, content: content})
  },
};
