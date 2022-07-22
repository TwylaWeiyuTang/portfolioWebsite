import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import $ from 'jquery'
import jQuery from 'jquery'
import './notFoundStyle.scss'
import { ReactComponent as TLogo } from '../../images/logoT.svg'

const NotFound = () => {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
 

// for the animation above 'home' button
function confetti() {
    $.each($(".particletext.confetti"), function(){
       var confetticount = ($(this).width()/50)*10;
       for(var i = 0; i <= confetticount; i++) {
          $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }

 jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

confetti()
    })

    
  return (
    <div class="notfound-container">
        <div className='logo-container'>
        <TLogo onClick={routeChange} style={{width: "80%", cursor: "pointer"}}/>
        </div>
    <div className='text-con'>
    <div class="line">
      <div class="left">
        <div class="content">
          <span class="spanSlow">404</span>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <span class="spanSlow">404</span>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="left">
        <div class="content">
          <span class="spanSlow">Page</span>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <span class="spanSlow">Page</span>
        </div>
      </div>
      </div>
      <div class="line">
          <div class="left">
            <div class="content">
              <span class="spanFast">Not</span>
            </div>
          </div>
          <div class="right">
            <div class="content">
              <span class="spanFast">Not</span>
            </div>
          </div>
        </div>
        <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Found</span>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <span class="spanSlow">Found</span>
              </div>
            </div>
          </div>
        <h3>Bring Me <a href='/' className="particletext confetti">Home</a></h3>
        </div>
</div>
  )
}

export default NotFound