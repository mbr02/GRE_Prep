const mongoose = require("mongoose");
// const { errorHandler } = require('../helpers/dbErrorHandling')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://new-user1:newuser1@auth-node.e9pbv.mongodb.net/db-greprep?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`mongo connection host is ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log(
      `error : mongo connection is not established try whiteListing the IP`
    );
  }
};

module.exports = connectDB;
