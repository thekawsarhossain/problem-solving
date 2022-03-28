// এখানে আমরা fizz buzz দ্বারা এমন করতে চাচ্ছি যে ১ থেকে শুরু করে যত নাম্বার ই দেওয়া হয়না কেনো এখানে ৩, এবং ৫ আবার ৩ ও ৫ উভয় দ্বারা বিভাজ্য কিনা চেক করব ।
// তাই এখানে যদি ৩ দ্বারা বিভাজ্য হয় আমরা বলবো fizz এবং ৫ দ্বারা বিভাজ্য হলে buzz এবং উভয় দ্বারা হলে fizzbuzz

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is buzz`);
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(100);
