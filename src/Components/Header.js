import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
         <video src="../../videos/header-background.mp4" playsinline autoplay muted loop></video>
         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a href="#home">申请地区运营中心</a></li>
               <li><a href="#about">孵化之星赛</a></li>
               <li><a href="#resume">女总裁IP赛 </a></li>
               <li><a href="#portfolio">运河代言赛</a></li>
               <li><a href="#testimonials">创新创业赛</a></li>
               <li><a href="#contact">大学生才艺赛</a></li>
               <li><a href="#contact">会长PK赛</a></li>
               <li><a href="#contact">县长PK赛</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}.</h1>
               <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>
      </header>
    );
  }
}

export default Header;
