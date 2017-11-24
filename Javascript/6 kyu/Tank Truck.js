/*
To introduce the problem think to my neighbor who drives a tanker truck. The level indicator is down and he is worried because he does not know if he will be able to make deliveries. We put the truck on a horizontal ground and measured the height of the liquid in the tank.

Fortunately the tank is a perfect cylinder and the vertical walls on each end are flat. The height of the remaining liquid is h, the diameter of the cylinder is d, the total volume is vt (h, d, vt are positive or null integers). You can assume that h <= d.

Could you calculate the remaining volume of the liquid? Your function tankvol(h, d, vt) returns an integer which is the truncated result (e.g floor) of your float calculation.

Examples:

tankvol(40,120,3500) should return 1021 (calculation gives about: 1021.26992027)

tankvol(60,120,3500) should return 1750

tankvol(80,120,3500) should return 2478 (calculation gives about: 2478.73007973)
Tank vertical section:
*/

function tankvol(h, d, vt) {
    let r = d / 2;
    if (h < r) {
        let theta = Math.acos((r - h) / r);
        let width = 2 * d * Math.sin(theta);
        return Math.floor(vt / 2 * (Math.PI * r * r * 2 * theta / Math.PI - width * (r - h) / 2) / (Math.PI * r * r));
    }
    else if (h == r)
        return Math.floor(vt / 2);
    else {
        h = d - h;
        let theta = Math.acos((r - h) / r);
        let width = 2 * d * Math.sin(theta);
        return Math.floor(vt - vt / 2 * (Math.PI * r * r * 2 * theta / Math.PI - width * (r - h) / 2) / (Math.PI * r * r));
    }
}
