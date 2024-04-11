
let input = {
  company: 'AJIO',
  address: 'BLR',
  contact: 9999999999,
  mentor: {
    HTML: 'RIL',
    CSS: 'RIL',
    JavaScript: 'RIL'
  }
};

/* o/p ={
  Company: 'AJIO',
  Address: 'BLR',
  contact: 9999999999,
  'mentor.HTML': 'RIL',
  'mentor.CSS': ‘RIL’,
  'mentor.JavaScript': ‘RIL’
} */

function transformInput(input) {
  const output = {};

  for (const key in input) {
    if (typeof input[key] == 'object') {
      console.log("key", key)
      for (let subkey in input[key]) {
        let newKey = `${key}.${subkey}`
        output[newKey] = input[key][subkey];
      }
    }
    else{
      let newKey = key?.charAt(0)?.toUpperCase()+ key?.slice(1);
      output[newKey] = input[key];
    }
  }

  return output;
}


const output = transformInput(input);
console.log(output);
