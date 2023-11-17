import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://raniell16:Raniell17@cluster0.sdl1ozr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

export const mongoDBConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(error);
  }
};