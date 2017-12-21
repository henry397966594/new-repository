// function runAsync1() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('1执行完成');
//             resolve('随便什么数据1')
//         }, 2000);
//     })
//     return p
// }

// function runAsync2() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('2执行完成');
//             resolve('2随便什么数据')
//         }, 2000);
//     })
//     return p
// }
// function runAsync3() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('执行完成3');
//             resolve('随便什么数据3')
//         }, 2000);
//     })
//     return p
// }


// runAsync1().then(function(data){
//     console.log(data);
//     return runAsync2()
// }).then(function(data){
//     console.log(data);
//     return '直接返回数据'
// }).then(function(data){
//     console.log(data);
// })

// function getNumber(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*10); //生成1-10的随机数
//             if(num<=5){
//                 resolve(num);
//             }
//             else{

//                 reject(function(){
//                     console.log('数字太大了');

//                 });
//             }
//         }, 2000);
//     });
//     return p;            
// }

// getNumber()
// .then(
//     function(data){
//         console.log('resolved');
//         console.log(data);
//     }, 
//     function(data){
//         console.log('rejected');
//         console.log(data());


//     }
// );

// console.log(1);
// new Promise(function (resolve, reject){

//     global.setTimeout(function (){
//         resolve(false);
//     }, 0);
// }).then(function(){
//     console.log(2);
// }, function(){
//     console.log(3);
// });
// console.log(4);

var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 'one'); 
  }); 
  var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'two'); 
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
  });
//   Promise.all([p1,p2,p3,p4]).then(function(a){
//     console.log('hello world '+a);
    
    
    
//   })
  
Promise.race([p1,p2,p3,p4]).then(a=>{
    console.log(a);
    
})