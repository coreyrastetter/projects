$(function() {
    $('#divSubNavRight').click(function() {
		var $n =  $('#divSubNavRight');
		var n = $n[0];
		var $currVis = $('#divSubNavRight').next('.show');
		alert($n[0].id);
		alert($currVis[0].id);
		
		var $nxtToShow = $currVis.next('.hidden');
		alert($nxtToShow[0].id);
		
    });
});


/*

var $theList = $('#theList');   // jQuery collection
var theList = $theList[0];      // DOM node
var theList = $theList.get(0);  // also a DOM node
Attribute and property access depends on whether you have a jQuery collection or not:

var id = $theList.attr('id');   // jQuery function
var id = theList.id;            // native property

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
			$(".sublink.subselected").not(this).removeClass("subselected"); 
		});
}); */