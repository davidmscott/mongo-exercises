module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?

	Checkout.aggregate([
		{$group: {_id: "$movieId", "count": {$sum: 1}}}]
		).sort({"count": "desc"}).exec(function(err, result) {
			Movie.findOne(
				{"_id": result[0]._id},
				function(err, result2) {
					console.log("3. Most checked out movie: " + result2.title);
				});
		});
};
