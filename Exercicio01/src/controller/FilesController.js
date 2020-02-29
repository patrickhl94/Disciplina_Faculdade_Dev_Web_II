const path = require('path');
const fs = require('fs');

const prepareFile = require('../util/PrepareFile');

class FileController {
  getView(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'view', 'index.html'));
  }

  getFileDefault(req, res) {
    const textFile = fs
      .readFileSync(path.resolve(__dirname, '..', '..', 'files', 'bible.txt'))
      .toString()
      .toUpperCase();

    // SEPARADO POR REGEX CONSIDERANDO QUE O \s+ MAPEIA TUDO OQ É ESPAÇO, TAB E LINHA,
    // E O [/,:;.?*!-]\s+ MAPEIA TODAS PONTUAÇÕES ANTERIOR A QUALQUER ESPACO.
    const fileArray = textFile.split(/[/,:;.?*!-]\s+|\s+/g).sort();

    return res.json(prepareFile(fileArray, 3));
  }

  getFileOrText(req, res) {
    const { numberWorks, text } = req.body;
    const { file } = req;

    if (!file && !text) {
      return res.json([
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
        { name: '', amount: 0 },
      ]);
    }

    let fileArray = [];
    if (text) {
      fileArray = text
        .toUpperCase()
        .split(/[/,:;.?*!-]\s+|\s+/g)
        .sort();
    } else {
      const textFile = fs
        .readFileSync(
          path.resolve(
            __dirname,
            '..',
            '..',
            'files',
            'upload',
            'file-search-works.txt'
          )
        )
        .toString()
        .toUpperCase();

      fileArray = textFile.split(/[/,:;.?*!-]\s+|\s+/g).sort();

      fs.unlink(
        path.resolve(
          __dirname,
          '..',
          '..',
          'files',
          'upload',
          'file-search-works.txt'
        ),
        err => {
          if (err) return console.log('Erro: ', err);
          return console.log('Arquivo Deletado');
        }
      );
    }
    return res.json(prepareFile(fileArray, numberWorks || 3));
  }
}

module.exports = new FileController();
