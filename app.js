const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');
const imageRoute = require('./routes/images');
const testRoutes = require('./routes/tests');

const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.use("/images", imageRoute);
app.use("/test", testRoutes);

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})