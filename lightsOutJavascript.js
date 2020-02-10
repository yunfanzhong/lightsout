$(document).ready(function () {
	$("tr:nth-child(1) td:nth-child(2), tr:nth-child(1) td:nth-child(3), tr:nth-child(1) td:nth-child(4)").toggleClass("tableOn");
	//$("tr:nth-child(2) td:nth-child(3)").toggleClass("tableOn");
	$("tr:nth-child(2) td:nth-child(2)").toggleClass("tableOn");
	$("tr:nth-child(3) td:nth-child(2), tr:nth-child(3) td:nth-child(3), tr:nth-child(3) td:nth-child(4)").toggleClass("tableOn");
	$("tr:nth-child(4) td:nth-child(2)").toggleClass("tableOn");
	$("tr:nth-child(5) td:nth-child(2), tr:nth-child(5) td:nth-child(3), tr:nth-child(5) td:nth-child(4)").toggleClass("tableOn");

	$("button").on('click', function () {
		for ($i = 1; $i <= 5; $i++) {
			for ($j = 1; $j <= 5; $j++) {
				$("tr:nth-child(" + $i + ") td:nth-child(" + $j + ")").removeClass("tableOn");
				}
			}
		$("tr:nth-child(1) td:nth-child(2), tr:nth-child(1) td:nth-child(3), tr:nth-child(1) td:nth-child(4)").toggleClass("tableOn");
		//$("tr:nth-child(2) td:nth-child(3)").toggleClass("tableOn");
		$("tr:nth-child(2) td:nth-child(2)").toggleClass("tableOn");
		$("tr:nth-child(3) td:nth-child(2), tr:nth-child(3) td:nth-child(3), tr:nth-child(3) td:nth-child(4)").toggleClass("tableOn");
		$("tr:nth-child(4) td:nth-child(2)").toggleClass("tableOn");
		$("tr:nth-child(5) td:nth-child(2), tr:nth-child(5) td:nth-child(3), tr:nth-child(5) td:nth-child(4)").toggleClass("tableOn");
		$("h1").removeClass("done");
		$("h2").removeClass("congrats");
	});


		$("td").on('click', function (event) {
		var target = $(event.currentTarget);

		var targetrow = target.parent().index() + 1;
		var targetcolumn = target.index() + 1;

		var leftSibling = "tr:nth-child(" + targetrow + ") td:nth-child(" + (targetcolumn - 1) + ")";
		var topSibling = "tr:nth-child(" + (targetrow - 1) + ") td:nth-child(" + targetcolumn + ")";
		var bottomSibling = "tr:nth-child(" + (targetrow + 1) + ") td:nth-child(" + targetcolumn + ")";
		var rightSibling = "tr:nth-child(" + targetrow + ") td:nth-child(" + (targetcolumn + 1) + ")";

		target.toggleClass("tableOn");
		$(leftSibling).toggleClass("tableOn");
		$(topSibling).toggleClass("tableOn");
		$(bottomSibling).toggleClass("tableOn");
		$(rightSibling).toggleClass("tableOn");

		var $allOff = 0;

		for ($i = 1; $i <= 5; $i++) {
			for ($j = 1; $j <= 5; $j++) {
				if ($("tr:nth-child(" + $i + ") td:nth-child(" + $j + ")").hasClass("tableOn") == true ) {
					$allOff++;
				}
			}
		}
		if ($allOff == 0) {
			$("h1").addClass("done");
			$("h2").addClass("congrats");
		}
		else {
			$("h1").removeClass("done");
			$("h2").removeClass("congrats");
		}
	});
});
