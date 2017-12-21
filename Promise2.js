// function runAsync(){
//     var p = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('执行完成');
//             resolve('herny is best')
//         }, 2000);
//     });
//     return p
// }
// runAsync().then(function(data){
//     console.log(data)
// })
// function runAsync(callback){
//     setTimeout(function(){
//         console.log('执行完成');
//        callback('hello xiang');
//     }, 2000);
// }
// var fn = function haha(data){
//     console.log(data);

// }
// runAsync(fn)
// function getNumber() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let num = Math.ceil(Math.random() * 10);
//             if (num <= 5) {
//                 resolve(num)
//             } else {
//                 reject('数字太大了')
//             }
//         }, 2000);
//     });
//     return p
// }
// getNumber().then(function (data) {
//     console.log('resolves');
//     console.log(data)
// }, function (reason) {
//     console.log('rejected')
//     console.log(reason)
// })
// getNumber()
// .then(function(data){
//     console.log('resolved');
//     console.log(data);
//     console.log(somedata); //此处的somedata未定义
// })
// .catch(function(reason){
//     console.log('rejected');
//     console.log(reason);
// });

