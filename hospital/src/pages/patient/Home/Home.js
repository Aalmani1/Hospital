
import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown ,Space , Avatar} from 'antd';
import { UserOutlined, LogoutOutlined, BookOutlined, CalendarOutlined, FileOutlined } from '@ant-design/icons';
import './home.css'
import BookAppointmet from '../BookAppointment/BookAppointment';
import MyAppointmet from '../MyAppointment/MyAppointment';
import MyPrescription from '../MyPrescription/MyPrescription';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home({setUserOpj}) {
  const navigate = useNavigate();

  const [component , setComponent]=useState();
  const profileMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={()=>(setUserOpj(),navigate("/"))}>
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
          defaultSelectedKeys={['1']}
          style={{  borderRight: 0, backgroundColor: '#458ff6', color: '#fff' }}
        >
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
      <div style={{ fontWeight: 'bold' }}>Patient Name {" "}</div>
    </Space>
    <Dropdown overlay={profileMenu}>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  </div>
</Header>
<Content style={{ margin: '24px 16px 0' }}>
       {   component===1&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <BookAppointmet/>
          </div>}
          {   component===2&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <MyAppointmet/>
          </div>}
          {   component===3&&<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <MyPrescription/>
          </div>}
          
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;