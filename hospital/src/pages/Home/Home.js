import React from "react";
import "../Home/Home.css";
import bannedImg from '../../imgs/banner-image.png';
import elemImg1 from '../../imgs/element-img-1.png';
import elemImg2 from '../../imgs/element-img-2.png';
import elemImg3 from '../../imgs/element-img-3.png';
import elemImg4 from '../../imgs/element-img-4.png';
import elemImg5 from '../../imgs/element-img-5.png';
import servesImg1 from '../../imgs/service-icon-1.png'
import servesImg2 from '../../imgs/service-icon-2.png'
import servesImg3 from '../../imgs/service-icon-3.png'
import servesImg4 from '../../imgs/service-icon-4.png'
import servesImg5 from '../../imgs/service-icon-5.png'
import servesImg6 from '../../imgs/service-icon-6.png'
import healthCareImg from "../../imgs/health-care-img.png"
import arrow from "../../imgs/arrow-down.svg"
import downladImg from "../../imgs/download-image.png"
import articalImg1 from '../../imgs/article-img-1.png'
import articalImg2 from '../../imgs/article-img-2.png'
import articalImg3 from '../../imgs/article-img-3.png'
import curveShape1 from "../../imgs/curve-shape-1.png"
import SignUp from "../patient/SignUp/SignUp";

const Home = ()=>{

return (
    <div>
        <div class="page-wrapper">
        <header class = "header">
                <nav class = "navbar">
                    <div class="container">
                        <div class="navbar-content d-flex justify-content-between align-items-center">
                            <div class = "brand-and-toggler d-flex align-items-center justify-content-between">
                                <a href = "#" class = "navbar-brand d-flex align-items-center">
                                    <span class="brand-shape d-inline-block text-white">H</span>
                                    <span class="brand-text fw-7">Hospital</span>
                                </a>
                                <button type = "button" class = "d-none navbar-show-btn">
                                    <i class = "fas fa-bars"></i>
                                </button>
                            </div>

                            <div class = "navbar-box">
                                <button type = "button" class = "navbar-hide-btn">
                                    <i class = "fas fa-times"></i>
                                </button>

                                <ul class = "navbar-nav d-flex align-items-center">
                                    <li class = "nav-item">
                                        <a href = "/" class = "nav-link text-white nav-active text-nowrap">Home</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "#OurServices" class = "nav-link text-white text-nowrap">Our services</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "#apps" class = "nav-link text-white text-nowrap">Apps</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "login" class = "nav-link text-white text-nowrap">Login</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "signUp" class = "nav-link text-white text-nowrap">SignUp</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="element-one">
                    <img src = {elemImg1} alt = ""/>
                </div>

                <div class="banner">
                    <div class="container">
                        <div class="banner-content">
                            <div class="banner-left">
                                <div class="content-wrapper">
                                    <h1 class="banner-title">Virtual healthcare <br/> for you</h1>
                                    <p class="text text-white">Hospital provides progressive, and affordable healthcare, accessible on mobile and onnline for everyone</p>
                                    <a href = "/signin" class="btn btn-secondary">Consult today</a>
                                </div>
                            </div>

                            <div class = "banner-right d-flex align-items-center justify-content-end">
                                <img src = {bannedImg} alt = ""/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section class = "sc-services" id="OurServices">
                    <div class = "services-shape">
                        <img src ={curveShape1} alt = ""/>
                    </div>
                    <div class="container">
                        <div class = "services-content">
                            <div class="title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name">Our services</h3>
                                    <div class = "title-separator mx-auto"></div>
                                    <p class = "text title-box-text">We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                                </div>
                            </div>

                            <div class = "services-list">
                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg1} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Search doctor</h5>
                                    <p class = "text">Choose your doctor form thousands of specialist, general and trusted hospitals.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg2} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Online pharmacy</h5>
                                    <p class = "text">Buy your medicines with our mobile application with a simple delivery system</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg3} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Consultation</h5>
                                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg4} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Details info</h5>
                                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg5} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Emergency care</h5>
                                    <p class = "text">You can get 24/7 urgent care for yourself or your children and your lovely family.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src = {servesImg6} alt = "service icon"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Tracking</h5>
                                    <p class = "text">Track and save your mental history and health data</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class = "sc-grid sc-grid-one">
                    <div class="container">
                        <div class = "grid-content d-grid align-items-center">
                            <div class = "grid-img">
                                <img src = {healthCareImg} alt = ""/>
                            </div>
                            <div class = "grid-text">
                                <div class = "content-wrapper text-start">
                                    <div class = "title-box">
                                        <h3 class = "title-box-name text-white">Leading healthcare providers</h3>
                                        <div class = "title-separator mx-auto"></div>
                                    </div>

                                    <p class = "text title-box-text text-white">Hospital provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
                                    <button type = "button" class = "btn btn-white-outline">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-grid sc-grid-two" id="apps">
                    <div class = "container">
                        <div class = "grid-content d-grid align-items-center">
                            <div class = "grid-img">
                                <img src = {downladImg} alt = ""/>
                            </div>
                            <div class = "grid-text">
                                <div class = "content-wrapper text-start">
                                    <div class = "title-box">
                                        <h3 class = "title-box-name">Download our mobile apps</h3>
                                        <div class = "title-separator mx-auto"></div>
                                    </div>
                                    <p class = "text title-box-text">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                                    <button type = "button" class = "btn btn-primary-outline">
                                        Download
                                        <img src = {arrow} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-feedback">
                    <div class="container">
                        <div class = "feedback-content">
                            <div class = "feedback-element">
                                <img src = {elemImg3}/>
                            </div>
                            <div class="feedback-element-2">
                                <img src = {elemImg5}/>
                            </div>
                            <div class = "title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name text-white">What our customer are saying</h3>
                                    <div class = "title-separator mx-auto"></div>
                                </div>
                            </div>

                            <div class = "feedback-list feedback-slider owl-carousel owl-theme">
                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">Customer 1</p>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>

                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                       
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">Customer 2</p>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>

                          

                            
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-articles">
                    <div class = "articles-shape">
                        <img src = "assets/images/curve-shape-2.png" alt = ""/>
                    </div>
                    <div class = "container">
                        <div class = "articles-content">
                            <div class = "articles-element">
                                <img src = {elemImg2} alt = ""/>
                            </div>
                            <div class = "title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name">Check out our latest article</h3>
                                    <div class = "title-separator mx-auto"></div>
                                </div>
                            </div>
                            
                            <div class = "articles-list d-flex flex-wrap justify-content-center">
                                <article class = "articles-item">
                                    <div class = "item-img">
                                        <img src = {articalImg1}/>
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Disease detection, check up in the laboratory</div>
                                        <p class = "text">In this case, the role of the health laboratory is very important to do a disease detection ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>

                                <article class = "articles-item">
                                    <div class = "item-img">
                                        <img src = {articalImg2}/>
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Herbal medicines that are safe for consumption</div>
                                        <p class = "text">Herbal medicine is very widely used at this time because of its very good for your health ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>

                                <article class = "articles-item">
                                    <div class = "item-img">
                                        <img src = {articalImg3}/>
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Natural care for healthy facial skin</div>
                                        <p class = "text">A healthy lifestyle should start from now and also for your skin health ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer class = "footer">
                <div class = "container">
                    <div class = "footer-content">
                        <div class = "footer-list d-grid text-white">
                            <div class = "footer-item">
                                <a href = "#" class = "navbar-brand d-flex align-items-center">
                                    <span class = "brand-shape d-inline-block text-white">H</span>
                                    <span class = "brand-text fw-7">Hospital</span>
                                </a>
                                <p class = "text-white">Hospital provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                                <p class = "text-white copyright-text">&copy; Created by love</p>
                            </div>

                            <div class = "footer-item">
                                <h3 class = "footer-item-title">Company</h3>
                                <ul class = "footer-links">
                                    <li><a href = "#">About</a></li>
                                    <li><a href = "#OurServices">Our services</a></li>
                                    <li><a href = "#apps">Apps</a></li>
                                </ul>
                            </div>

                            <div class = "footer-item">
                                <h3 class = "footer-item-title">Region</h3>
                                <ul class = "footer-links">
                                    <li><a href = "#">Riyadh</a></li>
                                    <li><a href = "#">Jeddah</a></li>
                                    <li><a href = "#">Damam</a></li>
                                </ul>
                            </div>

                            <div class = "footer-item">
                                <h3 class = "footer-item-title">Help</h3>
                                <ul class = "footer-links">
                                    <li><a href = "#">Help center</a></li>
                                    <li><a href = "#">Contact support</a></li>
                                    <li><a href = "#">Instructions</a></li>
                                    <li><a href = "#">How it works</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class = "footer-element-1">
                    <img src = {elemImg4} alt = ""/>
                </div>
                <div class = "footer-element-2">
                    <img src = {elemImg5} alt = ""/>
                </div>
            </footer>
        </div>
    </div>
)
}

export default Home;