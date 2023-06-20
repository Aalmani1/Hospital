import { Space, Table, Tag,Button ,Dropdown} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select,message,Tooltip } from 'antd';
import moment from "moment/moment";
import './MyAppointment.css';
import CheckOutlined from '@ant-design/icons/CheckOutlined';  
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import MedicineBoxOutlined from '@ant-design/icons/MedicineBoxOutlined';
import { Modal, Input } from 'antd';


const MyAppointment =()=>{

    const [patientId , setPatientId]=useState(1);
    const [isLoading , setIsLoading]=useState(false);
    const [appointmentData , setAppointmentData]=useState();
    const [attendenc , setAttendenc]=useState({});
    const [modal , setModal]=useState(false);

    const getMyAppointment = async () => {
        try {
          const response = await axios.get(`http://localhost:1111/api/hospital/appointments/${patientId}`);
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
        getMyAppointment();
      }, []);
      console.log("3333",appointmentData)

      const columns = [
        {
            title: 'Appointment ID',
            dataIndex: 'appointmentId',
            key: 'appointmentId',
          },
        {
          title: 'Patient Name',
          dataIndex: 'PatientName',
          key: 'PatientName',
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
            title: 'status',
            render: (_, record) => (     
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
      

      <Tooltip title="Present">  

    <CheckOutlined  
      style={{ color: 'green' }}              
      onClick={()=>setAttendenc({recordId:record.appointmentId,
        attendencID:3})}      
    />  
     
</Tooltip>  

<Tooltip title="Absent"> 
     
    <CloseOutlined      
      style={{ color: 'red'}}        
      onClick={()=>setAttendenc({recordId:record.appointmentId,
        attendencID:1})}      
    />  

</Tooltip>
      </div>  
            )   
          },
          {   
            title: 'Issue Prescription',
            render: (record) => {
              return (        
                <Button       
                  icon={<MedicineBoxOutlined />}           
                //   disabled={attendenc.recordId !== 3}             
                  onClick={() => setModal(true)}       
                >
                  Prescription       
                </Button>   
              )   
            }
          }
      ];

      const issuePrescription =()=>(
        console.log("test")
      )

      const MedicationForm = () => {  
        return (
          <Form>
            <Form.Item
              name="name"
            
  >
                    <label>Drug Name</label>

    <Input  />         
            </Form.Item>

            <Form.Item
              name="dose"
            
            >
                <label>Dose</label>
              <Input  />          
            </Form.Item>

            <Form.Item
              name="duration"
            
            >
            <label>Duration</label>

              <Input/>        
            </Form.Item>

            <Form.Item 
  >
     <label>Order Instruction</label>

    <Input  />     
            </Form.Item>
            
            {/* Other fields */}            
          </Form>    
        );
      };

    return (
        <div>
        <Table columns={columns} dataSource={appointmentData} 
        rowClassName={(record, index) => {
            if (index % 2 === 0) return 'evenRow';
            return 'oddRow';
          }}/>

<Modal 
        title={
            <div style={{ color:'#458ff6' }}>Prescription</div>  
          }  
        
        visible={modal}
        onCancel={()=>setModal(false)}
        footer={<Form.Item style={{ marginTop: '2rem' }} >
        <Button type="primary" htmlType="submit" onClick={()=>issuePrescription()}>
          Issue prescription
        </Button>
      </Form.Item>}  
        width={'30%'}
      >
        {/* Other prescription info */}
                
       <div style={{paddingTop:"4%"}}>
       <MedicationForm />    


       </div>

      </Modal>
          </div>

    )
}
export default MyAppointment;