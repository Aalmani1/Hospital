import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message,Spin } from 'antd';
import moment from "moment/moment";
import './MyPrescription.css'

const MyPrescription=({userOpj})=>{

  console.log("userOpj",userOpj)
    const [isLoading , setIsLoading]=useState(false);
    const [prescriptionData , setPrescriptionData]=useState();

    const getMyPrescription = async () => {
      setIsLoading(true)
        try {
          const response = await axios.get(`http://localhost:1111/api/patient/${userOpj?.patientId}/prescriptions`);
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
  <div>
    {isLoading?
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Spin/>
    </div>
    :
    <div>
    <div  style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"100%", marginBottom:"15%"}}>
  
        <div style={{  padding:"3%"}}>
  
      <h3 style={{color:"#458EF6"}}>My Prescription</h3>
  <br></br>
    <br></br>
    <Table 
    columns={columns} 
    dataSource={prescriptionData}
    rowClassName={(record, index) => {
        if (index % 2 === 0) return 'evenRow';
        return 'oddRow';
      }}/>
      </div>
      </div>
      </div>
    }
      </div>
)
}
export default MyPrescription;