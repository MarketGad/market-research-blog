const createError = require('http-errors');
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const Image = require('./Models/imageModel');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error("Only Image Files are accepted"), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });
cloudinary.config({
  cloud_name: "marketgaddevcloud1",
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET
});

app.get("/", (req, res) => {
  Image.find((err, images) => {
      if (err) {
          res.json(err.message);
      } else {
          res.json(images);
      }
  });
});


app.post("/add", upload.single("image"), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
      if (err) {
          req.json(err.message);
      }
      req.body.image = result.secure_url;
      req.body.imageId = result.public_id;

      Image.create(req.body, (err, image) => {
          if (err) {
              res.json(err.message);
              return res.redirect("/");
          }
      });
  });
});

const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(console.log(`Connected to MongoDB`))
.catch(error => {
  console.log(error);
});


const indexRouter = require('./routes/index');
const testroute = require('./routes/test');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ limit:"50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
