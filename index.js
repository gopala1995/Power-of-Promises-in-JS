//What is promises

const isSuccess = true;
const fetchData = (isSuccess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Data fetch Successfully!");
      } else {
        reject("Error: unable to fetch Data");
      }
    }, 2000);
  });
};

console.log(fetchData(isSuccess));
