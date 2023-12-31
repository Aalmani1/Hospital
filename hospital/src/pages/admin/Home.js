
import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown ,Space , Avatar,message} from 'antd';
import { UserOutlined, LogoutOutlined, BookOutlined, CalendarOutlined, FileOutlined,HomeOutlined } from '@ant-design/icons';
import './home.css'
import CreateDoctor from './CreateDoctor';
import AllAppointment from './AllAppointment';
import AllDoctors from './AllDoctors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Progress } from 'antd';
import { DollarOutlined, ClipboardOutlined, CommentOutlined } from '@ant-design/icons';


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
          defaultSelectedKeys={['0']}
          style={{  borderRight: 0, backgroundColor: '#458ff6', color: '#fff' }}
        >
          <Menu.Item key="0" icon={<HomeOutlined />} style={{ color: '#fff' }}onClick={()=>setComponent(0)}>
            Home
          </Menu.Item>
          <Menu.Item key="1" icon={<CalendarOutlined />} style={{ color: '#fff' }} onClick={()=>setComponent(1)}>
          Create Doctor
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />} style={{ color: '#fff' }}onClick={()=>setComponent(2)}>
            All Doctors
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />} style={{ color: '#fff' }}onClick={()=>setComponent(3)}>
            All Appointment
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header className="site-layout-header-background" style={{ backgroundColor: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
  <div className="site-layout-header-content" style={{ display: 'flex', justifyContent:"flex-end",alignItems: 'center' }}>
    <Space size={8}>
      <div style={{ fontWeight: 'bold' }}>Admin {" "}</div>
    </Space>
    <Dropdown overlay={profileMenu}>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  </div>
</Header>
<Content style={{ margin: '24px 16px 0' }}>
{   component===0&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
<div>
  Dashboard
</div>
          </div>}
{   component===1&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <CreateDoctor/>
          </div>}
       {   component===2&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <AllDoctors/>
          </div>}
          {   component===3&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <AllAppointment/>
          </div>}
          
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;