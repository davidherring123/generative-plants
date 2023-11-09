import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

function Sketch() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let sketch = new p5(p => {
            p.setup = function() {
                p.createCanvas(window.innerWidth,window.innerHeight - 160).parent(canvasRef.current);
                seg = new Segment(300, 200, 100, 0);
                                
            }

            p.draw = function() {
                p.background(255);
                p.ellipse(p.mouseX, p.mouseY, 50, 50);
            }
        });

        return () => {
            sketch.remove();
        };
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div ref={canvasRef}></div>
        </div>
    );
}

export default Sketch;
