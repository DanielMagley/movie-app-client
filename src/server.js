//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/movie-app"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/movie-app/index.html"));
});

app.run([
  "Carousel",
  Carousel => {
    Carousel.setOptions({
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      cssEase: "ease",
      dots: false,

      easing: "linear",
      fade: false,
      infinite: true,
      initialSlide: 0,

      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500
    });
  }
]);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
