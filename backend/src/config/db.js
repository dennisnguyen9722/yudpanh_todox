import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTING);

    console.log("Liên kết CSDL thành công");
  } catch (error) {
    console.log("Lỗi khi kết nối cơ sở dữ liệu");
    process.exit(1);
  }
};
