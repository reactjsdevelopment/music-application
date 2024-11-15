let arrData = [
    {
      a: 1,
      b: '33'
    },
    {
      a: 2,
      b: '44'
    }
  ]

  let d = _.cloneDeep(arrData);
  d[0].a = 44444;
  console.log(arrData);
  console.log(d);
  // your case  
  let k = Object.assign([], arrData);
  _.uniq('aaabbbccc').join('');  
  if (k[0] == arrData[0]) {
    console.log(' In your case references are the same');
  }