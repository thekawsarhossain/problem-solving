// এখানে আমাদের কে বের করা লাগবে যে একটা বাক্য তে কত বার একটা নাম ব্যাবহার করা হয়েছে এবং এর প্রথম ইন্দেক্স কত ?

const sentence =
  "hello there this is Kawsar hossain, and again am telling my name is kawsar and that's all ";

const matches = sentence.match(/kawsar/gi);
const occurances = matches ? matches.length : 0;
console.log(occurances);

let position = sentence.search(/kawsar/i);
position = position >= 0 ? position : "not found";
console.log(position);
