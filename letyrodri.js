var palette1 = [
["#331832","white"],
["#00539C","white"],
["#694D75","white"],
["#DCE8EC","black"],
["#FDFDFA","black"]
]


var palette2 = [
["#4B4237","white"],
["#D69C2F","white"],
["#736B60","white"],
["#C5BCBA","black"],
["#EDE7D9","black"]
]

var palette3 = [
["#0D1321","white"],
["#9E1030","white"],
["#DAE6A2","black"],
["#C5BCBA","black"],
["#FFEDDF","black"]
]

var palette4 = [
["black","white"],
["#616161","white"],
["#757575","black"],
["white","black"],
["#f1f1f1","black"]
]

var palette5 = [
["#604D53","white"],
["#FF6F61","white"],
["#9DA3A4","black"],
["#E8DFE1","black"],
["#FFF5F4","black"]
]


var palette = [palette1, palette2, palette3, palette4, palette5];



function changeColors(classname, newbgcolor, newtextcolor){
    Array.from( document.getElementsByClassName(classname)).map(function(element) {
               element.style.backgroundColor=newbgcolor;
               element.style.color=newtextcolor;
    })
}

function changePalette(target_palette) {
	var original_palette = ["letyrodri-c1","letyrodri-c2","letyrodri-c3","letyrodri-c4","letyrodri-c5"] 
	
	for (var i = 0; i < original_palette.length; ++i) {
    	changeColors(original_palette[i],target_palette[i][0],target_palette[i][1]);
	}
	
}

function start() {
	var palette_qty = palette.length;
	var palette_id = Math.floor((Math.random() * palette_qty));
	
	changePalette(palette[palette_id]);
	
}

function start_fixed(palette_id) {
	changePalette(palette[palette_id]);
	
}

