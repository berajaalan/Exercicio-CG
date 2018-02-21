function dist(p1, p2){

  let mag, ang;

  mag = Math.sqrt(((p1[0]-p2[0])*(p1[0]-p2[0]))+((p1[1]-p2[1])*(p1[1]-p2[1])));

  ang = (180*Math.atan2(p2[0], p2[1]))/Math.PI;

  return [mag, ang];

}

function dist3(p1, p2){

  let mag, angx, angy, angz, diagxz, diagxy, diagyz;

  diagxz = Math.sqrt(((p1[0]-p2[0])*(p1[0]-p2[0]))+((p1[2]-p2[2])*(p1[2]-p2[2])));

  diagxy = Math.sqrt(((p1[0]-p2[0])*(p1[0]-p2[0]))+((p1[1]-p2[1])*(p1[1]-p2[1])));

  diagyz = Math.sqrt(((p1[1]-p2[1])*(p1[1]-p2[1]))+((p1[2]-p2[2])*(p1[2]-p2[2])));

  mag = Math.sqrt(((p1[1]-p2[1])*(p1[1]-p2[1]))+(diagxz*diagxz));

  angx = (180*Math.atan2(p2[0]-p1[0], diagyz))/Math.PI;

  angy = (180*Math.atan2(p2[1]-p1[1], diagxz))/Math.PI;

  angz = (180*Math.atan2(p2[2]-p1[2], diagxy))/Math.PI;

  return [mag, angx, angy, angz];

}

let p2d1 = [0, 1], p2d2 = [3, 3];
let p3d1 = [0, 1, 1], p3d2 = [1, 2, 2];

console.log(dist(p2d1,p2d2));
console.log(dist3(p3d1,p3d2));
