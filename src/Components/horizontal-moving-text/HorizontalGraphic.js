import React, { useEffect } from "react";
import { gsap } from "gsap";
import './horizontalGraphicStyle.scss'

const HorizontalGraphic = ({text}) => {

    useEffect(() => {
        gsap.set('.wrapper-graphic',{xPercent:-50,yPercent:-50})
        // gsap.set('#no02',{y:50})
        // gsap.set('#no03',{y:120})

        var boxWidth = 390,
            totalWidth = boxWidth * 9,  //  * n of boxes
            no02 = document.querySelectorAll("#no02 .box-graphic"),
            // no02 = document.querySelectorAll("#no02 .box"),
            // no03 = document.querySelectorAll("#no03 .box"),
            dirFromLeft = "+=" + totalWidth,
            dirFromRight = "-=" + totalWidth;

        var mod = gsap.utils.wrap(0, totalWidth);

        function marquee(which, time, direction){
        gsap.set(which, {
            x:function(i) {
            return i * boxWidth;
            }
        });

        gsap.timeline()
        .to(which,  {
        x: direction,
        modifiers: {
            x: x => mod(parseFloat(x)) + "px"
        },
            duration:time, ease:'none',
            repeat:-1,
        });
        }

        gsap.timeline()
        .add(marquee(no02, 25, dirFromRight), 3)
        // .add(marquee(no02, 20, dirFromLeft), 2)
        // .add(marquee(no03, 20, dirFromRight), 3)

        return() => {
            gsap.timeline.kill()
        }
            })
    return (
        <>
        <div id="no02" class="wrapper-graphic">
        <div class="boxes-graphic">
            <div class="box-graphic">{text}</div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
            <div class="box-graphic">{text} </div>
        </div>
        </div>

        {/* <div id="no02" class="wrapper">
        <div class="boxes">
            <div class="box">GreenSock</div>
            <div class="box">Nice Tool</div>
            <div class="box">GreenSock</div>
            <div class="box">Animate</div>
            <div class="box">Fast & easy</div>
            <div class="box">GreenSock</div>
            <div class="box">The best</div>
        </div>
        </div>

        <div id="no03" class="wrapper">
        <div class="boxes">
            <div class="box">GreenSock</div>
            <div class="box">Nice Tool</div>
            <div class="box">GreenSock</div>
            <div class="box">Animate</div>
            <div class="box">Fast & easy</div>
            <div class="box">GreenSock</div>
            <div class="box">The best</div>
        </div>
        </div> */}
        </>
    )
}

export default HorizontalGraphic;
