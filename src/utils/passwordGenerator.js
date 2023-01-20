const buffer =
  "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ0123456789_$+";
module.exports = (length = 10) => {
  let s = "";
  for (let i = 0; i < length; i++) {
    s += buffer[Math.floor(Math.random() * buffer.length)];
  }
  return s;
};
