Meteor.startup(function(){
if (Images.find().count() == 0){
	for (var i=1;i<5;i++){
		Images.insert(
			{
				img_src:"img_"+i+".jpg",
				img_alt:"image number "+i,
				img_name: "No name"
			}
		);	
	}// end of for insert images
	// count the images!
	console.log("startup.js says: "+Images.find().count());
}// end of if have no images
});
/* Meteor.publish("chats", function(){
  return Chats.find({ 
  $or: [{
      user1Id: this.userId
    }, {
      user2Id: this.userId
    }]
  });
})
  Meteor.publish("userdata", function() {
    if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        "profile": 1,
        "avatar": 1
      }
    });
  }
  }) */
