import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sdmdigq.mongodb.net/?retryWrites=true&w=majority`;

export const databaseConnection = async () => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Connect Db success!");
    })
    .catch((error) => {
      console.log("Error in Database Service: ", error);
    });

  // mongoose.connection.on("connected", () => {
  //   const db = mongoose.connection.db;
  //   console.log();
  //   console.log("Kết nối cơ sở dữ liệu thành công");
  //   console.log("Cơ sở dữ liệu:", db);

  //   db.listCollections().toArray((err, collections) => {
  //     console.log("Các collection trong cơ sở dữ liệu:");
  //     collections.forEach((collection) => {
  //       console.log(collection.name);
  //     });
  //   });
  // });
};
