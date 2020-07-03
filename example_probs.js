/**
 * Return first recurring character given an array
 * a=[1,2,3,2,3,1] //Output : 1
 */
const rec = (arr) => {
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]) return arr[i];
        obj[arr[i]] = true;
    }
    return null;
}
console.log(rec([1,2,3,2,1]))
