module.exports = function prepareFile(data, numerWords) {
  // RETIRANDO AS DUPLICAÇÕES
  const arrayNotDuplication = data.reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
      init.push(current);
    }
    return init;
  }, []);

  // CONTANDO QUANTAS VEZES CADA PALAVRA REPETE
  const arrayCountValues = data.reduce((allNames, name) => {
    if (name.toString() in allNames) {
      // eslint-disable-next-line no-plusplus
      allNames[name.toString()]++;
    } else {
      allNames[name.toString()] = 1;
    }
    return allNames;
  }, []);

  /* POPULANDO ARRAY COM OBJETOS CONTENDO O NOME DE CADA PALAVRA E A QUANTIDADE DE VEZES
    QUE ELA REPETE. */
  const tenWorks = [];
  // eslint-disable-next-line array-callback-return
  arrayNotDuplication.map(palavra => {
    if (palavra.length > numerWords) {
      tenWorks.push({
        name: palavra,
        amount: arrayCountValues[palavra],
      });
    }
  });

  // ORDENA OS OBJETOS DO ARRAY DE ACORDO COM O NÚMERO DE PALAVRAS REPETIDAS
  tenWorks.sort((a, b) => {
    if (a.amount > b.amount) {
      return -1;
    }
    if (a.amount < b.amount) {
      return 1;
    }
    return 0;
  });

  return [
    tenWorks[0] || { name: '', amount: 0 },
    tenWorks[1] || { name: '', amount: 0 },
    tenWorks[2] || { name: '', amount: 0 },
    tenWorks[3] || { name: '', amount: 0 },
    tenWorks[4] || { name: '', amount: 0 },
    tenWorks[5] || { name: '', amount: 0 },
    tenWorks[6] || { name: '', amount: 0 },
    tenWorks[7] || { name: '', amount: 0 },
    tenWorks[8] || { name: '', amount: 0 },
    tenWorks[9] || { name: '', amount: 0 },
  ];
};
