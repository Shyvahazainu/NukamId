"use strict";
import axios from "axios";

class BerandaController {
  async index({ view, auth }) {
    // const user = auth.user.toJSON()
    let movie = axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M3MDRhMGEwYmY0MjJiMWIxOWQzZmRlYzhlNmYxZCIsInN1YiI6IjYzNjI0NDViNDIwMjI4MDA3OThiZjU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEbAESEXDTgB_0rNhpN43ISmpJsFg9mNPv8YSR1V6_A",
        },
      }
    );
    movie = movie.data.results;

    return view.render("page/beranda", { movie });
  }
}

module.exports = BerandaController;
