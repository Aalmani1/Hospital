import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message } from 'antd';
import moment from "moment/moment";
import './MyAppointment.css'

const MyAppointmet=()=>{

    const [patientId , setPatientId]=useState(1);
    const [isLoading , setIsLoading]=useState(false);
    const [appointmentData , setAppointmentData]=useState();

    const getMyAppointment = async () => {
        try {
          const response = await axios.get(`http://localhost:1111/api/hospital/all-appointment/${patientId}`);
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

      const deleteAppointment = async (id) => {
        try {
          await axios.delete(`http://localhost:1111/api/hospital/delete-appointment/${id}`);
          message.success('Appointment deleted successfully');
          console.log(`Appointment with ID ${id} deleted successfully`);
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

      console.log("33",appointmentData)
      useEffect(() => {
        getMyAppointment();
      }, []);

    const columns = [
        {
            title: 'Appointment ID',
            dataIndex: 'appointmentId',
            key: 'appointmentId',
          },
        {
          title: 'Doctor Name',
          dataIndex: 'doctorName',
          key: 'doctorName',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Date',
          dataIndex: 'appointmentTime',
          key: 'appointmentTime',
          render: (text) => <a>{moment(text).format("DD-MM-YYYY")}</a>,
        },
        {
          title: 'Time',
          dataIndex: 'appointmentTime',
          key: 'appointmentTime',
          render: (text) => <a>{moment(text).format("HH:MM")}</a>,
        },
        {
          title: 'Status',
         
          render: (e) => (
            <>
         {
            e.absent === null &&
            <Tag color={"gray"} >
                            Not defined
                          </Tag>
         }
         {
            e.absent === 1 &&
            <Tag color={"volcano"} >
                            Absent
                          </Tag>
         }
         {
            e.absent === 2 &&
            <Tag color={"geekblue"} >
                            Comming
                          </Tag>
         }
         {
            e.absent === 3 &&
            <Tag color={"green"} >
                            Completed
                          </Tag>
         }
          
            </>
          ),
        },
        {
          title: 'Action',
          key: '',
          render: (e) => (
            <Space >
            <Button 
            type="link" 
            disabled={new Date(e.appointmentTime) < Date.now()}
            onClick={() => deleteAppointment(e.appointmentId)}
        >
            <DeleteOutlined style={{ color:new Date(e.appointmentTime) < Date.now()?"gray": 'red' }} />
        </Button>
          </Space>
          ),
        },
      ];


return (
    <Table columns={columns} dataSource={appointmentData} 
    rowClassName={(record, index) => {
        if (index % 2 === 0) return 'evenRow';
        return 'oddRow';
      }}/>
)
}
export default MyAppointmet;