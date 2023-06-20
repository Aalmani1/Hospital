import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message } from 'antd';
import moment from "moment/moment";
import './MyPrescription.css'

const MyPrescription=()=>{

    const [patientId , setPatientId]=useState(1);
    const [isLoading , setIsLoading]=useState(false);
    const [prescriptionData , setPrescriptionData]=useState();

    const getMyPrescription = async () => {
        try {
          const response = await axios.get(`http://localhost:1111/api/patient/${patientId}/prescriptions`);
          console.log(response.data);
          setIsLoading(false);
          setPrescriptionData([])
          setPrescriptionData(response.data)
          return response.data;
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };


console.log("222",prescriptionData)
    
      useEffect(() => {
        getMyPrescription();
      }, []);

    const columns = [
        {
            title: 'Prescription ID',
            dataIndex: 'prescriptionId',
            key: 'prescriptionId',
          },
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
          title: 'Drug Name',
          dataIndex: 'drugName',
          key: 'drugName',
      
        },
        {
          title: 'Dose',
          dataIndex: 'dose',
          key: 'dose',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
          },
          {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
          },
          {
            title: 'Oreder instruction',
            dataIndex: 'orderInstruction',
            key: 'orderInstruction',
          },
      ];


return (
    <Table 
    columns={columns} 
    dataSource={prescriptionData}
    rowClassName={(record, index) => {
        if (index % 2 === 0) return 'evenRow';
        return 'oddRow';
      }}/>
)
}
export default MyPrescription;