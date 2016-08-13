module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	Movie.find(
		{ title: /^The Lord of the Rings:/ },
		function(err, result) {
			var movieIds = [];
			for (var i = 0; i < result.length; i++) {
				movieIds.push(result[i]._id);
			}
			Checkout.find(
				{movieId: {$in: movieIds}},
				function(err, result) {
				}
			).distinct(
				'userId',
				function(err, UserIds) {
					console.log("2. Users that checked out a LotR movie: " + UserIds);
				}
			);
		}
	);
};
