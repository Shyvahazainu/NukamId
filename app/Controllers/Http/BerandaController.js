"use strict";

class BerandaController {
  index({ view, auth }) {
    // const user = auth.user.toJSON()
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=c7c704a0a0bf422b1b19d3fdec8e6f1d"
      )
      .then(function (response) {
        // handle success
        // return view.render("page/beranda", { response });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  anomali() {
    return "hai";
  }
}

module.exports = BerandaController;
