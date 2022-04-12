/**
 * const,let等の変数宣言
 */
// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

//letは再宣言不可能
//let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // //const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "なまえ",
//   age: 28
// };
// val4.name = "jsk";
// val4.addres = "Hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
//  */
// const name = "A";
// const age = 21;
// //テンプレート文字列を用いた方法
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// /**
//  * アロー関数
//  */
// const func = (str) => {
//   return str;
// };
// console.log(func("aa"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(10, 20));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "A",
//   age: "28"
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { n, a } = myProfile;
// const message2 = `名前は${n}です。年齢は${a}歳です。`;
// console.log(message2);

// const myProfile = [`AA`,20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const[name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
//  */
// const sayHello = (name = "初期値") => console.log(`こんにちは！${name}さん`);
// sayHello("AAA");

/**
 * スプレッド構文[...]
 */
// //配列の展開
// const arr1 = [1,2,];
// // console.log(arr1);
// // console.log(...arr1)

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4,...arr5];
// // console.log(arr7);

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["AA","BB","CC"]
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // })
// // console.log(nameArr2);
// // nameArr.map((name) => console.log(name))

// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // })
// // console.log(newNumArr);
// // nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です`))

// const newNameArr = nameArr.map((name) => {
//   if (name === "AA"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 参考演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? `trueです` : `falseです`
// console.log(val1)

// const num = 1300;
// console.log(num.toLocaleString());

// const num2 = "1300";
// const formattedNum = typeof num === `number` ? njjｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊum2.toLocaleString() : `数値を入力してください`
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? `100を超えています`:`許容範囲内です`
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// ||は左側がfalseなら右側を返ｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊｊす
//  const num  = null;
//  const fee = num || "金額未設定です"
//  console.log(fee)
