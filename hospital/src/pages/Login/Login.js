import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import elemImg1 from '../../imgs/element-img-1.png';
import bannedImg from '../../imgs/banner-image.png';
import { Form, Input ,AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    InputNumber,
    Row,
    Select,  message} from 'antd';
    import axios from 'axios';

const Login = ({setUserOpj}) =>{

    const [username , setUsername]=useState();
    const [password , setPassword]=useState()

    const navigate = useNavigate();

    const login = async () => {
        try {
          const response = await axios.post('http://localhost:1111/api/login', {
            userName: username,
            password: password
          });
          // Show success message
          message.success('LogedIn successfully');
          //clearForm();
          setUserOpj(response?.data)
          if(response?.data.role==="doctor"){
            navigate('/doctor'); // Redirect to signin page
          }else if(response?.data.role==="patient"){
            navigate('/patient'); // Redirect to signin page
          }
          
    
          return response.data;
        } catch (error) {
            if(error?.response?.status===400){
            message.error(error?.response?.data?.Message);
            }
          else{
          message.error('Something went wrong , please try again later');
          }
          
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        login();
      };

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
                                        <a href = "/" class = "nav-link text-white nav-active text-nowrap">Home</a>
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

                            <div class = "banner-left d-flex align-items-center justify-content-end">
                                <img src = {bannedImg} alt = ""/>
                            </div>

                            <div class="banner-right">
                                <div  >
                                   <div style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"80%"}}>
                                    <br></br>
                                    <h3 style={{margin:"5%", color:"#458EF6"}}>Login</h3>
                                    <Form 
                                    style={{
                                        maxWidth: 600,
                                        margin:"5%"
                                      }}
                                      scrollToFirstError>

                        
                                    <Form.Item>
                                    <label style={{color:"black",textAlign:"left"}}>Username : </label>
                                    <Input 
                                    value={username}
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
                                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                    Login
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

export default Login;