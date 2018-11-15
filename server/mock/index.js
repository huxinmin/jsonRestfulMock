const genData = require('./genData');

module.exports = function({itfDataType, itfDataDefinitions}) {
  const genOneData = () => {
    let oneData = {};
    itfDataDefinitions.forEach((item) => {
      const { keyName, valType: { main, child }, min, max } = item;
      oneData[keyName] = genData(main, child, min, max);
    });
    return oneData;
  }
  if(itfDataType === 'plural'){
    let data = [];
    for (let i=0; i< 10; i++) {
      data[i] = Object.assign(genOneData(), { id: i });
    }
    return data;
  } else {
    return genOneData();
  }
}
