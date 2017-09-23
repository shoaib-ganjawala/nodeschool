
function getShortMessages(messageArray) {
  return messageArray.filter((item) => {
    return item.message.length < 50;
  }).map((item) => {
    return item.message;
  })
}

module.exports = getShortMessages;
