const emojis = require("./dictionary");
const emojinize = (text) => {
  return (text || "").replace(/:([a-zA-Z0-9+-_]*?):/g, (match, part)=>{
    const target = emojis.find((emoji)=>{
      return emoji.aliases.indexOf(part) !== -1;
    });
    return target ? target.emoji : match;
  });
};

module.exports = emojinize;