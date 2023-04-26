const axios = require("axios");

class RequestController {
  static async randomJokes(req, res, next) {
    try {
      const response = await axios.get(
        "https://dad-jokes.p.rapidapi.com/random/joke",
        {
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": "7b4faac74fmsh50fe40b522617d7p1312acjsnf8161e8aa8bf",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
          },
          // params: {category: 'all', count: '10'}
        }
      );
      const {joke} = response.data.body[0];
      // const joke = respons ;
      res.status(200).json({joke});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RequestController;
