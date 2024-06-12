const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001; // پورت را به 5001 تغییر دادیم

// میدل‌ورها
app.use(bodyParser.json());
app.use(cors());

// اتصال به MongoDB
mongoose
  .connect("mongodb://localhost:27017/userdb")
  .then(() => {
    console.log("اتصال به MongoDB برقرار شد");
  })
  .catch((err) => {
    console.error("اتصال به MongoDB شکست خورد", err);
  });

// تعریف اسکیمای کاربر و مدل آن
const userSchema = new mongoose.Schema({
  name: String,
  family: String,
  phone: String,
});

const User = mongoose.model("User", userSchema);

// روت‌های اپلیکیشن

// ایجاد کاربر جدید
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// دریافت تمامی کاربران
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// به‌روزرسانی کاربر با ID خاص
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// حذف کاربر با ID خاص
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "کاربر حذف شد" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/", (req, res) => {
  res.send("سرور اکسپرس در حال اجرا است");
});
// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`سرور در حال اجرا در http://localhost:${PORT}`);
});
