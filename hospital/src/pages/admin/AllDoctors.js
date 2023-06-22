import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message ,Spin} from 'antd';
import moment from "moment/moment";

const AllDoctors =()=>{

    const [doctorsData , setDoctorsData]=useState();
    const [isLoading , setIsLoading]=useState(false);
    const [doctorId , setDoctorId]=useState()

    
    const getAllDoctors = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`https://localhost:44381/api/hospital/all-doctors`);
          console.log(response.data);
          setIsLoading(false);
          setDoctorsData([])
          setDoctorsData(response.data)
          return response.data;
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };


    
      useEffect(() => {
        getAllDoctors();
      }, []);


      const deleteDoctor = async (id) => {
        try {
          await axios.delete(`https://localhost:44381/api/hospital/delete-doctor/${id}`);
          message.success('Appointment deleted successfully');
          console.log(`Doctor with ID ${id} deleted successfully`);
        } catch (error) {
            if(error?.response?.status===400){
                message.error(error?.response?.data?.Message);
                }
              else{
              message.error('Something went wrong , please try again later');
              }
          console.error(`Error deleting appointment with ID ${id}:`, error);
        }
      };

    const columns = [
        {
            title: 'Doctor Id',
            dataIndex: 'doctorId',
            key: 'doctorId',
          },
          {
            title: 'Doctor Name',
            dataIndex: 'fullName',
            key: 'fullName',
          },
        {
          title: 'UserName',
          dataIndex: 'userName',
          key: 'userName'
        },
        {
          title: 'Phone number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
      
        },
        {
            title: 'Action',
            key: '',
            render: (e) => (
              <Space >
              <Button 
              type="link" 
              onClick={() => deleteDoctor(e.doctorId )}
          >
              <DeleteOutlined style={{ color:'red' }} />
          </Button>
            </Space>
            ),
          },
    
      ];
    return (

        <div>
    <div  style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"100%", marginBottom:"15%"}}>

        <div style={{  padding:"3%"}}>

      <h3 style={{color:"#458EF6"}}>All Doctor</h3>
<br></br>
<br></br>
{isLoading?
   <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
   <Spin/>
   </div>:
        <Table 
        columns={columns} 
        dataSource={doctorsData}
        rowClassName={(record, index) => {
            if (index % 2 === 0) return 'evenRow';
            return 'oddRow';
          }}/>
        }
          </div>
          </div>
          </div>
    )
}

export default AllDoctors;