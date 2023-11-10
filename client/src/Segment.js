import p5 from "p5";

class Segment {
    constructor(x, y, len_, angle_, parent_) {
      this.a = new p5.Vector(x,y);
      this.b = new p5.Vector();
      this.len = len_;
      this.angle = angle_;
      this.parent = parent_;

      this.calculateB();
    }
  
    calculateB() {
      let dx = this.len * Math.cos(this.angle);
      let dy = this.len * Math.sin(this.angle);
      this.b.set(this.a.x + dx, this.a.y + dy);
    }

    follow(p, tx, ty) {
        let target = new p5.Vector(tx,ty);
        let dir = new p5.Vector();
        dir = p5.Vector.sub(target, this.a);
        this.angle = dir.heading();

        dir.setMag(this.len);
        dir.mult(-1);

        this.a = p5.Vector.add(target, dir);
    }
  
    update() {
      this.calculateB();
    }
  
    show(p) {
        p.stroke(255);
        p.strokeWeight(5);
        p.line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }

export default Segment;