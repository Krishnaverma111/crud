const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.url)
 

.then(() => { console.log(`MongoDB connected successfully`); })
.catch((e) => { console.log(`MongoDB error: ${e}`); });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
