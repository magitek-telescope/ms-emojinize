const emojis = require("./dictionary");
const emojinize = (text) => {
  return text.replace(/:([a-zA-Z0-9+-_]*?):/g, (match, part)=>{
    const target = emojis.find((emoji)=>{
      return part in emoji.aliases;
    });
    return target ? target.emoji : match;
  });
}

module.exports = emojinize;