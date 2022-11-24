const axios = require("axios");

const fetchData = async (id) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    // console.log(result);
    return result.data;
  } catch (e) {
    // console.log(e);
  }
};

fetchData(1);
module.exports = fetchData;
