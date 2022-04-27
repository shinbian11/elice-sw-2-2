// ===========================

// console.log(1);
// fetch("http://localhost:3000/topics")
//   .then(function (res) {
//     console.log(2);
//     return res.json();
//   })
//   .then(function (topics) {
//     console.log(3);
//     console.log("topics : ", topics);
//   });
// console.log(4);

// 1
// 4
// 2
// 3
// topics : [fetch 해서 가져온 데이터 배열]

// ===========================

// console.log(1);
// let response = await fetch("http://localhost:3000/topics");
// console.log(2);
// let topics = await response.json();
// console.log(3);
// console.log('topics : ', topics);

// 1
// 2
// 3
// topics : [fetch 해서 가져온 데이터 배열]

// ===========================

// let response = await fetch("http://localhost:3000/topics");
// let topics = await response.json();
// let firstData = await fetch("http://localhost:3000/topics/"+topics[0].id);
// let firstResult = await firstData.json();
// console.log(firstResult);

// {id: 1, title: 'html', body: 'html is ...'}

// ===========================
