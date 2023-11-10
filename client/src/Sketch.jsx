import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import Segment from './Segment.js'

function Sketch() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let sketch = new p5(p => {

            let segArray = [];
            let segLength = 50;
            let segCount = 5;
            let base = new p5.Vector(window.innerWidth/2, window.innerHeight-160);

            p.setup = function() {
                p.createCanvas(window.innerWidth, window.innerHeight - 160).parent(canvasRef.current);

                for (let i = 0; i < segCount; i++) {
                    segArray.push(new Segment(0,0,segLength,0, null));
                }

                for (let i = 0; i < segCount - 1; i++) {
                    segArray[i].parent = segArray[i+1];
                }
            }

            p.draw = function() {
                p.background(0);
                for (let i = 0; i < segCount - 1; i++) {
                    segArray[i].follow(p, segArray[i+1].a.x, segArray[i+1].a.y);
                    segArray[i].update();
                    if (segArray[i].a.x != 0 && segArray[i].a.y != 0) {
                        segArray[i].show(p);
                    }
                }
                segArray[segCount-1].follow(p, p.mouseX, p.mouseY);
                segArray[segCount-1].update();
                if (segArray[segCount-1].a.x != 0 && segArray[segCount-1].a.y != 0) {
                    segArray[segCount-1].show(p);
                }
            }
        });

        return () => {
            sketch.remove();
        };
    }, [window.innerHeight, window.innerWidth]);

    return (
        <div className="flex items-center justify-center">
            <div ref={canvasRef}></div>
        </div>
    );
}

export default Sketch;
