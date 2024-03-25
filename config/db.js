const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Sanjeev:Sanjeev123@cluster0.ybrdh6e.mongodb.net/yourDatabaseNameHere?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Re-throwing the error to handle it in the calling code
  }
};

module.exports = connect;
