if (Meteor.isClient) {
    Template.photos.helpers({
        photos: function() {
            return Photos.find({}, {sort: {'createdAt': -1}});
        }
    });



}
