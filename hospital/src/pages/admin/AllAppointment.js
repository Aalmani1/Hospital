import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message,Spin } from 'antd';
import moment from "moment/moment";

const AllAppointment =()=>{
    const [appointmentData , setAppointmentData]=useState();
    const [isLoading , setIsLoading]=useState(false);

    
    const getAllAppointment = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`http://localhost:1111/api/hospital/all-appointment`);
          console.log(response.data);
          setIsLoading(false);
          setAppointmentData([])
          setAppointmentData(response.data)
          return response.data;
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };


    
      useEffect(() => {
        getAllAppointment();
      }, []);

    const columns = [
        {
            title: 'Appointment Id',
            dataIndex: 'appointmentId',
            key: 'appointmentId',
          },
          {
            title: 'Patient Name',
            dataIndex: 'patientName',
            key: 'patientName',
          },
        {
          title: 'Doctor Name',
          dataIndex: 'doctorName',
          key: 'doctorName'
        },
        {
          title: 'Appointment date',
          dataIndex: 'appointmentTime',
          key: 'appointmentTime',
          render:e=>(
            <div>{moment(e).format("DD-MM-YYYY")}</div>
          )
        },
        {
          title: 'Appointment time',
          dataIndex: 'appointmentTime',
          key: 'appointmentTime',
          render:e=>(
            <div>{moment(e).format("HH:MM")}</div>
          )
        },
    
      ];
    return (
          <div>
          <div  style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"100%", marginBottom:"15%"}}>
      
              <div style={{  padding:"3%"}}>
      
            <h3 style={{color:"#458EF6"}}>All Appointment</h3>
      <br></br>
      <br></br>
      {isLoading?
         <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
         <Spin/>
         </div>:
      <Table 
        columns={columns} 
        dataSource={appointmentData}
        rowClassName={(record, index) => {
            if (index % 2 === 0) return 'evenRow';
            return 'oddRow';
          }}
          />
        }
      
                </div>
                </div>
                </div>
    )
}

export default AllAppointment;