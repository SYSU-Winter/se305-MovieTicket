window.onload = function() {
    var k = 1;
    var s;
	var seat = {};
	seat.seats = [];
	for (var i = 0; i < 8; i++) {
		seat.seats[i] = [];
	}
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 10; j++) {
            seat.seats[i][j] = document.createElement("button");
            s = i.toString() + j.toString();

            seat.seats[i][j].className = "seat";
            seat.seats[i][j].id = s;
            fragment.appendChild(seat.seats[i][j]);
        }
        fragment.appendChild(document.createElement("br"));
    }
    document.getElementById("display").appendChild(fragment);
    var m = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 10; j++) {
            seat.seats[i][j].onclick = function() {
                
                k = k % 3 + 1;
                
                this.style.backgroundImage = "url(img/"+k+".png)";
            }
        }
    }
}
