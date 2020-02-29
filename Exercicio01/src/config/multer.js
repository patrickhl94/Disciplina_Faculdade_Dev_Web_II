const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    // DEFININDO DESTINO DO ARQUIVO
    destination: path.resolve(__dirname, '..', '..', 'files', 'upload'),
    filename: (req, file, calbk) => {
      // DEFININDO O NOME DO ARQUIVO
      calbk(null, `file-search-works.txt`);
    },
  }),
};
