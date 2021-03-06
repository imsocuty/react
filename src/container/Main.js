import React, { Component } from 'react';
import jQuery from "jquery";
import $ from "jquery"
import '../App.css';
import Image from 'react-image'
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
window.$ = window.jQuery = jQuery;

class Main extends Component {


  render() {

    return (
      <div className="main">
        <div id="premain" class="scroll">
        </div>
        <div className="header-background">

          <div className="menu">
            <ul className="nav">
              <li className="Home" id="moveBtn1">INTRO</li>
              <li className="myself" id="moveBtn2">ABOUT</li>
              <li className="Skill" id="moveBtn3">SKILL</li>
              <li className="project" id="moveBtn4">PROJECT</li>
              <li className="contact" id="moveBtn5">CONTACT</li>
            </ul>
          </div>
          <div className="text-wrap">
            <div className="text-box">
              <p id="title-text">안녕하세요! 홍석현의 포트폴리오입니다.</p>
              <p class="title"></p>
            </div>
          </div>
        </div>

        <About />

        <Skill />

        <Project />
        
        <Contact />


      </div>




    )
  }
}
$(document).ready(function () {
  $("#moveBtn1").on("click", function (event) {
    var offset = $("#premain").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn2").on("click", function (event) {
    var offset = $("#preId").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn3").on("click", function (event) {
    var offset = $("#preId11").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn4").on("click", function (event) {
    var offset = $("#preId2").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn5").on("click", function (event) {
    var offset = $("#preId3").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

function changeText(cont1, cont2, speed) {
  var Otext = cont1.text();
  var Ocontent = Otext.split("");
  var i = 0;
  function show() {
    if (i < Ocontent.length) {
      cont2.append(Ocontent[i]);
      i = i + 1;
    };
  };
  var Otimer = setInterval(show, speed);
};

$(document).ready(function () {
  changeText($("#title-text"), $(".title"), 150);
});


$(function () {
  $('li').click(function () {
    $('li').removeClass()
    $(this).addClass('on')
  })
})

$('html, body').css({ 'overflow': 'hidden' });
$('#element').on('scroll touchmove mousewheel', function (event) {
  return false;
});

$(document).ready(function () {
  $("html,body").animate({ scrollTop: 0 }, 100); //100ms for example
});
export default Main;