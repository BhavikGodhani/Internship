let obj = {};
let count = 0;
function string(str){
    let arr = str.split("");
  for(let i = 0; i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }
        else{
           obj[arr[i]]++;
        }
      }
      return obj;
}
console.log(string("aususgufhfwedyqwsa"));