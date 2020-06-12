var createError = require('http-errors');
var express = require('express');
var mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var cors = require('cors');

//Database setup
// var url = process.env.DATABASEURL || "mongodb://localhost/BlogPage";
// mongoose.connect(url, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});


var indexRouter = require('./routes/index');
var testroute = require('./routes/test');

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/test', testroute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
