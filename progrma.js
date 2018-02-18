function dist(p1, p2){

  let mag, ang, sen, i = 1;

  mag = Math.sqrt(((p1[0]-p2[0])*(p1[0]-p2[0]))+((p1[1]-p2[1])*(p1[1]-p2[1])));

  sen = (p1[1]-p2[1])/mag;

  ang = (180*Math.atan2(p2[0], p2[1]))/3.14

  return [mag, ang];
}

function dist3(p1, p2){

}

let p2d1 = [0, 0], p2d2 = [4, 3];
let p3d1 = [0, 0, 0], p3d2 = [0, 0, 0];

console.log(dist(p2d1,p2d2));
