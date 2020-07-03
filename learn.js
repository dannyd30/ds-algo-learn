/**
 * Debouncing
 */

 const debounce = (func,delay) => {//deboounce is wait for sometime then call fn
     let inDebounce;
     return function() {//dont use arrow function here because then this context will be set to creation context instead of execution
         
         const args = arguments;
         const context = this;
           clearTimeout(inDebounce);
         inDebounce = setTimeout(() => {
             
             func.apply(context, args)},delay);
     }
 }

 const throttle = (func,limit) => {//call once then wait for sometime before it can be called again
    let inThrottle;
    return function(){
        const context = this;
        const args = arguments;
        if(!inThrottle){
            func.apply(context,args);
            inThrottle = true;
            setTimeout(()=>inThrottle=false,limit)
        }
    }
 }

//  const throttle = (func, limit) => {
//     let lastFunc
//     let lastRan
//     return function() {
//       const context = this
//       const args = arguments
//       if (!lastRan) {
//         func.apply(context, args)
//         lastRan = Date.now()
//       } else {
//         clearTimeout(lastFunc)
//         lastFunc = setTimeout(function() {
//           if ((Date.now() - lastRan) >= limit) {
//             func.apply(context, args)
//             lastRan = Date.now()
//           }
//         }, limit - (Date.now() - lastRan))
//       }
//     }
//   }
 const clickFn = function(event) {
     console.log(this);
 }
 const throttleClick = function(event){
     console.log('throttle');
 }
 const clicked = debounce(clickFn,3300) 
 const tClick = throttle(throttleClick,3000);
 //Because ‘this’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.
 
const contextExplain = () => {
    const o1= {
        a:'1',
        
            sayA: function(name){
               setTimeout(()=>console.log(`${this.a}: ${name}`),0)
            }
       
        
    };
    const o2 ={
        a:2
    }

    o1.sayA();
let b =polyfilBind(o1.sayA,o2);
console.log(b);
 b('john');
// 
}

const polyfilBind = (_method,_this,) => {
    // let newObj = Object.create(_this); -> does deep copy of _this
    let newObj = {};
    Object.assign(newObj,_this); //does only shallow copy
    return (...args) => {_method.apply(newObj,args)};
    
};
// contextExplain();
let polyfilCall = (fn,_this,...args) => {
    _this.fnName = fn;
    _this.fnName(...args);
};

function showName(greet,lname){
    console.log(`${greet} ${this.name} ${lname}`);
}
let o={name: 'harry'}
// polyfilCall(showName,o);
// showName.
polyfilCall(showName,o,'hello','potter');


