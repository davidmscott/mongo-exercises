module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	Checkout.aggregate([
		{$group: {_id: "$userId", "count": {$sum: 1}}}]
		).sort({"count": "desc"}).exec(function(err, result) {
			var answer = "User " + result[0]._id + " had " + result[0].count + " checkouts.";
			var i = 1;
			while (result[0].count === result[i].count) {
				answer = "User " + result[i]._id + " " + answer;
				i++;
			}
			console.log("1. " + answer);
		});
};