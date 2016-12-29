Meteor.methods ({
  addChat: function(otherUserId) {
    if(Meteor.userId()) {
    var chatId;
    // find a chat that has two users that match current user id
    // and the requested user id
    var filter = {$or:[
                {user1Id:Meteor.userId(), user2Id:otherUserId}, 
                {user2Id:Meteor.userId(), user1Id:otherUserId}
                ]};
    var chat = Chats.findOne(filter);
    if (!chat){// no chat matching the filter - need to insert a new one
      chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});
    }
    else {// there is a chat going already - use that. 
      chatId = chat._id;
    } return chatId;
  } },
  updateMessages: function (chatId, messages) {
    Chats.update(chatId, messages);
  }
});