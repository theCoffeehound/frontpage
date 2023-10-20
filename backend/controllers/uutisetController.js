const axios = require('axios'); // Import the Axios library

// Fetch news from YLE teletext
const getAll = async (req, res) => {
  try {
      const response = await axios.get("https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=" + process.env.app_id + "&" + "app_key=" + process.env.app_key);
      const jsonData = response.data;
      res.json(jsonData);
    } catch (error) {
      console.error('Error fetching JSON:', error);
      res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred while fetching data.' });
    }
};

exports.getAll = getAll;