
const sharp = require('sharp');
const fs = require('fs');
module.exports = function(ImageFile) {
  // eslint-disable-next-line camelcase
  ImageFile.upload = function(ctx, options, access_token, post_id, cb, user_id) {
    if (!options) options = {};
    ctx.req.params.container = 'ImageFile';
    if (!fs.existsSync('./server/storage/' + ctx.req.params.container)) {
      fs.mkdirSync('./server/storage/' + ctx.req.params.container);
    }

    ImageFile.app.models.ImageFile.upload(ctx.req, ctx.result, options, (err, file)=>{
      if (err) {
        cb(err);
      } else {
        const fileInfo = file.files.file[0];
        sharp('./server/storage/' + ctx.req.params.container + '/' + fileInfo.name).resize(100)
          .toFile('./server/storage/' + ctx.req.params.container + '/100-' + fileInfo.name, (err)=>{
            if (!err) {
              ImageFile.Create({
                url: CONTAINER_URL + fileInfo.container + '/downloads' + fileInfo.name,
                thumbnail: CONTAINER_URL + fileInfo.container + '/downloads/100-' + fileInfo.name,
                createdAt: new Date(),
                postId: post_id,
                userId: user_id,

              }), (err2, image)=>{
                if (err2) {
                  cb(err2);
                } else {
                  cb(null, image);
                }
              };
            }
          });

        // sharp(`./server/storage ${ctx.req.params.container}/${fileInfo.name}`);
      }
    });
  };

  ImageFile.remoteMethod(
    'upload',
    {
      description: 'Uploads a file',
      accepts: [{arg: 'ctx', type: 'object', http: {source: 'context'}},
        {arg: 'options', type: 'object', http: {source: 'query'}},
        {args: 'access_token', type: 'string'},
        {args: 'post_id', type: 'string'},
        {args: 'user_id', type: 'string'},

      ],
      returns:
          {arg: 'fileObject', type: 'object', root: true},

      http: {verb: 'post'},
    }

  );
};

