// console.log(1);
// let promise = new Promise((resolve, reject) => {
//     console.log('成功')
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10)
//         if (num <= 3) {
//             console.log(num);
//             resolve()
//         } else {
//             console.log('数字太大了');
//             reject()
//         }
//     }, 2000);
// })

// let promise2 = new Promise((resolve, reject) => {

//     resolve()
// })
// promise2.then(function () {
//     console.log('哈哈')
// })
// promise.then(function () {
//     console.log('终于成功了')
// }, function () {
//     console.log('终于失败了')
// })
// console.log(3)

// // Promise.all([promise, promise2]).then(function () {
// //     console.log('全都完成，已成功')
// // })
// Promise.race([promise,promise2]).then(()=>{
//     console.log('告诉我谁跑的最快');

// })

let p1 = new Promise((res, rej) => {
    rej('haha')
})
let p2 = new Promise((res, rej) => {
    setTimeout(res, 3000, "two")
})
Promise.race([p1, p2]).then(function (data) {
    console.log(data)
}, function (data) {
    console.log('被拒绝了', data)
})