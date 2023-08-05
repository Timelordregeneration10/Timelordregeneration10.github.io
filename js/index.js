var scrollCheck = document.getElementById("scrollCheck");
var pos1 = 1, flag1 = 0;
var id = setInterval(frame, 25);
function frame() {
    if (pos1 >= 2.5) {
        flag1 = 1;
    }
    if (pos1 <= 0.5) {
        flag1 = 0;
    }
    if (flag1 == 0) { pos1 += 0.05; }
    if (flag1 == 1) { pos1 -= 0.05; }
    scrollCheck.style.bottom = pos1 + "vw";
}
