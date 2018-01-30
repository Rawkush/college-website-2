const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

// Multer Config
const multerConfig = (destination, filetypes) => {
  const storage = multer.diskStorage({
    destination,
    filename(req, file, cb) {
      cb(null, `${uuid()}${path.extname(file.originalname)}`);
    },
  });

  // Check File Type
  function checkFileType(file, cb) {
    const gotName = path.extname(file.originalname).toLowerCase();
    const extname = filetypes.test(gotName);
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Not a expected file!');
  }

  function fileFilter(req, file, cb) {
    checkFileType(file, cb);
  }

  const upload = multer({
    storage,
    limits: {
      fileSize: 1024 * 1024,
    },
    fileFilter,
  });
  return upload;
};

module.exports = { multerConfig };
