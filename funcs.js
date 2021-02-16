const capitalize = (str) => {
  const first = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1);
  return first + rest;
};

const reverseStr = (str) => {
  let strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
};

const calculator = {
  add(a, b){
    return a + b;
  },
  subtract(a, b){
    return a - b;
  },
  multiply(a, b){
    return a * b;
  },
  divide(a, b){
    return a / b;
  }
};

//---------Caesar---------
const strToCode = (str) => {
  let charArr = [];
  for (let i = 0; i < str.length; i ++){
    const newCharCode = str.charCodeAt(i);
    charArr.push(newCharCode);
  };
  return charArr;
}
const addToCode = (arr) => {
  const addedOne = [];
  arr.map(code => {
    if(code === 90 || code === 122){
      if(code == 90){
        addedOne.push(65);
      }else{
        addedOne.push(97);
      }
    }else{
      addedOne.push(code + 1);
    }
  })
  return addedOne;
}
const backToStrArr = (arr) => {
  const backToStr = [];
  arr.map(code => {
    backToStr.push(String.fromCharCode(code));
  })
  return backToStr;
}
const caesar = (str) => {
  const charArr = strToCode(str);
  const addedOne = addToCode(charArr);
  const backToStr = backToStrArr(addedOne);
  return backToStr.join('');
};
//----------Caesar-----------  


const analize = (arr) => {
  arr.sort((a, b) => a - b);
  const average = arr.reduce((preNum, cNum) => preNum + cNum, 0) / arr.length;
  const min = arr[0];
  let max = arr[arr.length - 1];
  let length = arr.length;

  return {
    average,
    min,
    max,
    length
  }
}

export { capitalize, reverseStr, calculator, caesar, analize }
