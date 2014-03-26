$(document).ready(
	function() {
		$(".sublink").click(function() {
			//$("#divProducts").addClass("hidden");
			
			//alert("You're here!");
			
			//setup list of subcontent divs
			var areas = {
			"cambridge": "CAMBRIDGE",
			"northend": "NORTH END / FANEUIL HALL",
			"backbay": "BACK BAY",
			"kenmore": "KENMORE / FENWAY",
			"southie": "SOUTHIE / DORCHESTER",
			"charlestown": "CHARLESTOWN",
			"innovationdist": "INNOVATION DISTRICT",
			"seaportdist": "SEAPORT DISTRICT",
			"chinatown": "CHINATOWN"
			}
			
					// find index of current div
			// find title text of current div +/- 1
			// hide old div
			// display new div
			
			var currDiv = $("div[class*='subvis']").attr("id").toLowerCase().substring(3);
			var targetDiv;
			
			alert(currDiv)
			
			$.each(areas, function(index, value) {
					if(index == currDiv) {
						alert("We're going to " + value + "!");
						alert(areas.length);
						return false;
					}
				})
			/*
			var $d = "div" + this.id.substring(2);

			if($(this).hasClass("subselected"))
			{
				return false;
			}

			$("#" + $d).fadeToggle();
			$(".hidden").not("#" + $d).hide();
			$(this).addClass("subselected");
			$(".sublink.subselected").not(this).removeClass("subselected"); */
		});
});