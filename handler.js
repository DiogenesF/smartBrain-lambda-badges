"use strict";

const emojis = ["😮", "🙂", "😀", "🤗", "😎", "🤩", "💍", "💎", "🚀"];
module.exports.rank = async (event) => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: "Thanks for using our face detector app!",
        input: rankEmoji,
      },
      null,
      2
    ),
  };
};
