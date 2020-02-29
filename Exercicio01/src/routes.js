const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const uploadFile = multer(multerConfig);
const route = new Router();

const FileController = require('./controller/FilesController');

route.get('/', FileController.getView);

route.get('/array-works', FileController.getFileDefault);

route.post('/updated', uploadFile.single('file'), FileController.getFileOrText);

module.exports = route;
