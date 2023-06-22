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
import { Modal, Input ,Spin } from 'antd';


const MyAppointment =({userOpj})=>{

    
    const [isLoading , setIsLoading]=useState(false);
    const [appointmentData , setAppointmentData]=useState();
    const [attendenc , setAttendenc]=useState({});
    const [modal , setModal]=useState(false);

    // ===================     prescription info
    const [appointmentId , setAppointmentId]=useState();
    const [patientId , setPatientId]=useState();
    const [drugName , setDrugName]=useState();
    const [dose , setDose]=useState()
    const [duration , setDuration]=useState()
    const [orderInstruction , setOrderInstruction]=useState()

    const getMyAppointment = async () => {
      setIsLoading(true)
        try {
          const response = await axios.get(`https://localhost:44381/api/hospital/appointments/${userOpj?.doctorId}`);
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

      const columns = [
        {
            title: 'Appointment ID',
            dataIndex: 'appointmentId',
            key: 'appointmentId'
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
                  onClick={() => (setModal(true),setAppointmentId(record.appointmentId),setPatientId(record.patientId))}       
                >
                  Prescription       
                </Button>   
              )   
            }
          }
      ];

      const createPrescription = async () => {
        try {
          const response = await axios.post('https://localhost:44381/api/issue-prescriptions', [{
            "doctorId": userOpj?.doctorId,
            "patientId": patientId,
            "drugName": drugName,
            "dose": dose,
            "orderInstruction": orderInstruction,
            "duration": duration,
            "appointmentId": appointmentId
          }]);
          // Show success message
          message.success('The prescription has been created successfully');
          clearForm();
          setModal(false)
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

      const issuePrescription =()=>(
        createPrescription()
      )

      const clearForm=()=>(
        setAppointmentId(),
        setPatientId(),
        setDrugName(),
        setDose(),
        setDuration(),
        setOrderInstruction()
      )



    return (
        <div>

          {isLoading?
             <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
             <Spin/>
             </div>
          :
        <Table columns={columns} dataSource={appointmentData} 
        rowClassName={(record, index) => {
            if (index % 2 === 0) return 'evenRow';
            return 'oddRow';
          }}/>
        }
<Modal 
        title={
            <div style={{ color:'#458ff6' }}>Prescription</div>  
          }  
        
        visible={modal}
        onCancel={()=>(setModal(false),clearForm())}
        footer={<Form.Item style={{ marginTop: '2rem' }} >
        <Button type="primary" htmlType="submit" onClick={()=>issuePrescription()}>
          Issue prescription
        </Button>
      </Form.Item>}  
        width={'30%'}
      >
        {/* Other prescription info */}
                
       <div style={{paddingTop:"4%"}}>
       <Form 
            style={{
                maxWidth: 600,
                margin:"5%"
              }}
              scrollToFirstError>
            <Form.Item
              name="name"
            
  >
                    <label>Drug Name</label>

            <Input value={drugName}  onChange={(e)=>setDrugName(e.target.value)}/>        
            </Form.Item>

            <Form.Item
              name="dose"
            
            >
                <label>Dose</label>
              <Input value={dose} onChange={(e)=>setDose(e.target.value)}/>          
            </Form.Item>

            <Form.Item
              name="duration"
            
            >
            <label>Duration</label>

              <Input value={duration} onChange={(e)=>setDuration(e.target.value)}/>        
            </Form.Item>

            <Form.Item 
  >
     <label>Order Instruction</label>

    <Input value={orderInstruction} onChange={(e)=>setOrderInstruction(e.target.value)} />     
            </Form.Item>
            
           
          </Form>   


       </div>

      </Modal>
          </div>

    )
}
export default MyAppointment;