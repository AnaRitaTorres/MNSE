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
  sendPost: function (res, content) {
    if (content === '' || content === [] || content === null || content === undefined) return res.send({success: false});
    if (content['errno'] !== undefined && content['sqlMessage'].includes('Duplicate')) return res.send({success: false, err: 'Duplicate Entry!'});
    if (content['errno'] !== undefined && content['errno'] > 0) return res.send({success: 'query error on post!', err: content});
    return res.send({success: true, content: content})
  },
  sendLogin: function (res, content) {
    if (content === '' || content === [] || content === null || content === undefined) return res.send({success: false, content:'Incorrect email/password!'});
    if (content['errno'] !== undefined && content['errno'] > 0) return res.send({success: 'query error on login!', err: content});
    return res.send({success: true, content: content})
  },
  sendRegister: function (res, content) {
    if (content === '' || content === [] || content === null || content === undefined) return res.send({success: false});
    if (content['errno'] !== undefined && content['sqlMessage'].includes('email')) return res.send({success:false, content: 'Email already in use!'});
    if (content['errno'] !== undefined && content['errno'] > 0) return res.send({success: 'query error on register!', err: content});
    return res.send({success: true, content: content})
  }
};
