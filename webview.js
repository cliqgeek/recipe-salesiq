module.exports = (Franz) => {
  const getMessages = () => {
    Franz.setBadge(ClientHandler.getBadgeCount());
  }
  Franz.loop(getMessages);
}