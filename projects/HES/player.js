class player {
  constructor(XPos, YPos, ZPos, Size, playerModel) {
    this.x = XPos;
    this.y = YPos;
    this.z = ZPos;
    this.size = Size;

    this.lastx = XPos;
    this.lasty = YPos;
    this.lastz = ZPos;

    this.model = playerModel; //Model To Load

  }

  drawPlayer() {
    push();
    translate(this.x, this.y, this.z);
    specularMaterial(250);
    shininess(200);
    noStroke();
    fill(23, 128, 232);
    sphere(this.size);
    translate(0, -60, 12);
    scale(0.5);
    model(this.model);
    pop();

  }

  setlocation() {
    this.x = this.lastx;
    this.y = this.lasty;
    this.z = this.lastz;
  }



  move(dx, dy, dz) {

    this.lastx = this.x;
    this.lasty = this.y;
    this.lastz = this.z;

    this.x += dx;
    this.y += dy;
    this.z += dz;
  }

  isColliding(collider) {
    //TODO Make each return variable, return all at the end.
    let obX = collider.getX();
    let obY = collider.getY();
    let obZ = collider.getZ();
    //Collision for Y

    let obSizeX = collider.getSizeX();
    let obSizeY = collider.getSizeY();
    let obSizeZ = collider.getSizeZ();

    let colX = (this.x + this.size / 2 < obX - obSizeX / 2 || this.x - this.size / 2 > obX + obSizeX / 2 || this.y + this.size / 2 < obY - obSizeY / 2 || this.y - this.size / 2 > obY + obSizeY / 2 || this.z - this.size / 2 > obZ + obSizeZ / 2 || this.z + this.sizeZ / 2 < obZ - obSizeZ / 2);


    //  let colY = (this.x + this.size/2 < obX - obSizeY/2 || this.x - this.size/2 > obX + obSizeY/2 || this.y + this.size/2 < obY - obSizeY/2 || this.y - this.size/2 > obY + obSizeY/2 || this.z - this.size/2 > obZ + obSizeY/2 || this.z + this.sizeY/2 < obZ - obSizeY/2);

    //  //Collsion for X;

    //  //Collsion for Z Not currently in use.

    //  print("ObsizeZ = " + obSizeY);

    // let colZ = (this.x + this.size/2 < obX - obSizeZ/2 || this.x - this.size/2 > obX + obSizeZ/2 || this.y + this.size/2 < obY - obSizeZ/2 || this.y - this.size/2 > obY + obSizeZ/2 || this.z - this.size/2 > obZ + obSizeZ/2 || this.z + this.sizeZ/2 < obZ - obSizeZ/2);

    //return colX;
    return !(colX);
    //return colZ;

  }
}
