import React, { useState } from "react";
import elemImg1 from '../../../imgs/element-img-1.png';
import "./Signup.css"
import bannedImg from '../../../imgs/banner-image.png';
import { Form, Input ,AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    InputNumber,
    Row,
    Select} from 'antd';

const SignUp = ()=>{

    const [firstName , setFirstName]=useState("");
    const[lastName , setLastName]=useState("")
    const[email , setEmail]=useState("")
    const[phoneNumber , setPhoneNumber]=useState("")
    const[usename , setUsername]=useState("")
    const[password , setPassword]=useState("")



      
    return (
        <div>

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
                                        <a href = "#" class = "nav-link text-white nav-active text-nowrap">Home</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "#OurServices" class = "nav-link text-white text-nowrap">Our services</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "#apps" class = "nav-link text-white text-nowrap">Apps</a>
                                    </li>
                                    <li class = "nav-item">
                                        <a href = "#" class = "nav-link text-white text-nowrap">Login</a>
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

                            <div class = "banner-left d-flex align-items-center justify-content-end">
                                <img src = {bannedImg} alt = ""/>
                            </div>

                            <div class="banner-right">
                                <div  >
                                   <div style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"80%"}}>
                                    <br></br>
                                    <h3 style={{margin:"5%", color:"#458EF6"}}>Signup</h3>
                                    <Form 
                                    style={{
                                        maxWidth: 600,
                                        margin:"5%"
                                      }}
                                      scrollToFirstError>

                                    <Form.Item
                                    name="firstName"
                                >
                                    <label style={{color:"black",textAlign:"left"}}>First Name : </label>
                                    <Input 
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    placeholder="First Name" 
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item> 
                                    <label style={{color:"black",textAlign:"left"}}>Last Name : </label>
                                    <Input 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item >
                                    <label style={{color:"black",textAlign:"left"}}>Email : </label>
                                    <Input 
                                    placeholder="Email"       
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    style={{color:"black"}}
                                    type="email"
                                    />
                                    </Form.Item>

                                    <Form.Item>
                                    <label style={{color:"black",textAlign:"left"}}>Mobile Number : </label>
                                    <Input 
                                    placeholder="Mobile Number"
                                    value={phoneNumber}
                                    onChange={(e)=>setPhoneNumber(e.target.value)}
                                    style={{color:"black"}}
                                    type="number"
                                     />
                                    </Form.Item>

                                    <Form.Item>
                                    <label style={{color:"black",textAlign:"left"}}>Username : </label>
                                    <Input 
                                    value={usename}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    placeholder="User Name" 
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item >
                                    <label style={{color:"black",textAlign:"left"}}>Password : </label>
                                    <Input 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Password" 
                                    style={{color:"black"}}
                                    type="password"
                                    />
                                    </Form.Item>

                                    <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                    Register
                                    </Button>
                                    </Form.Item>

                                    </Form>
                                    <br></br>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
export default SignUp; 