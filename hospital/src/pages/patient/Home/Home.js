
import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown ,Space , Avatar,message} from 'antd';
import { UserOutlined, LogoutOutlined, BookOutlined, CalendarOutlined, FileOutlined,HomeOutlined } from '@ant-design/icons';
import './home.css'
import BookAppointmet from '../BookAppointment/BookAppointment';
import MyAppointmet from '../MyAppointment/MyAppointment';
import MyPrescription from '../MyPrescription/MyPrescription';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import elemImg1 from '../../../imgs/element-img-1.png';
import bannedImg from '../../../imgs/banner-image.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home({setUserOpj ,userOpj}) {
  const navigate = useNavigate();

  const [component , setComponent]=useState(0);

  const logout = async () => {
    try {
      const response = await axios.post('https://localhost:44381/api/logout');
      // Show success message
      message.success('Logout successfully');
      //clearForm();
      setUserOpj(null)
      navigate('/');
      

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
    logout();
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleSubmit}>
        Logout
      </Menu.Item>
    </Menu>
  );
  

  return (
<Layout style={{ height: '120vh' }}>      
<Sider  className="site-layout-background" style={{ backgroundColor: '#458ff6', color: '#fff' }}>
        <div className='d-flex' style={{ fontSize: '1.5rem', fontWeight: 'bold', padding: '16px', color: '#fff' }}>
        <span class="brand-shape d-inline-block text-white">H</span>
                                    <span class="brand-text fw-7">Hospital</span>
        </div>
        <br></br>
        <Menu
          theme="light"
          mode="inline"
          style={{  borderRight: 0, backgroundColor: '#458ff6', color: '#fff' }}
        >
          <Menu.Item key="0" icon={<HomeOutlined />} style={{ color: '#fff' }}onClick={()=>setComponent(0)}>
            Home
          </Menu.Item>
          <Menu.Item key="1" icon={<BookOutlined />} style={{ color: '#fff' }} onClick={()=>setComponent(1)}>
            Book appointment
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />} style={{ color: '#fff' }} onClick={()=>setComponent(2)}>
            My appointment
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />} style={{ color: '#fff' }}onClick={()=>setComponent(3)}>
            My prescription
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header className="site-layout-header-background" style={{ backgroundColor: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
  <div className="site-layout-header-content" style={{ display: 'flex', justifyContent:"flex-end",alignItems: 'center' }}>
    <Space size={8}>
      <div style={{ fontWeight: 'bold' }}>{userOpj?.fullName} {" "}</div>
    </Space>
    <Dropdown overlay={profileMenu}>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  </div>
</Header>
<Content style={{ margin: '24px 16px 0' }}>
{   component===0&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
<div>

<div class="element-one">
    <img src = {elemImg1} alt = ""/>
</div>

<div class="banner">
    <div class="container">
        <div class="banner-content">
            <div class="banner-left">
                <div class="content-wrapper">
                    <h1 class="banner-title" style={{color:"#458ff6"}}>We Care</h1>
                    <p >Hospital provides progressive, and affordable healthcare, accessible on mobile and onnline for everyone</p>
                   
                </div>
            </div>

            <div class = "banner-right d-flex align-items-center justify-content-end">
                <img src = {bannedImg} alt = ""/>
            </div>
        </div>
    </div>
</div>
</div>
          </div>}
       {   component===1&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <BookAppointmet userOpj={userOpj} setComponent={setComponent}/>
          </div>}
          {   component===2&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <MyAppointmet userOpj={userOpj}/>
          </div>}
          {   component===3&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <MyPrescription userOpj={userOpj}/>
          </div>}
          
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;