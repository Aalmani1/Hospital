import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Form, DatePicker, Select, Button,message } from 'antd';
import moment from "moment/moment";
const { Option } = Select;

const BookAppointmet=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [doctors,setDoctors]=useState();
    const [form] = Form.useForm();
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableAppointment , setAvailableAppointment]=useState([])
    const [fullTime , setFullTime]=useState(null)

  

    const getDoctors = async () => {
        try {
          const response = await axios.get('http://localhost:1111/api/hospital/all-doctors');
          console.log(response.data);
          setIsLoading(false);
          setDoctors(response.data)
          return response.data;
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      const getAvailableAppointment = async () => {
        try {
          const response = await axios.get(`http://localhost:1111/api/hospital/available-appointments/${selectedDoctorId}/${selectedDate}`);
          console.log(response.data);
          setIsLoading(false);
          setAvailableAppointment([])
          setAvailableAppointment(response.data)
          return response.data;
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      useEffect(() => {
        getDoctors();
      }, []);
    
 
      const createAppointment = async () => {
        try {
          const response = await axios.post('http://localhost:1111/api/hospital/Add-appointment', {
            appointmentTime: fullTime,
            patientId: 1,
            doctorId: selectedDoctorId,
          });
          // Show success message
          message.success('Appointment created successfully');
          clearForm(); 
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

      const clearForm=()=>(
        setSelectedDate(null),
        setSelectedDoctorId(null),
        setAvailableAppointment([])
        )

const handleDoctorSelect = (value, option) => {
    console.log("@@",value)
    setSelectedDoctorId(value);
  };


  const handleDateSelect = (date, dateString) => {
    
    console.log(dateString)
    setSelectedDate(dateString);
    setAvailableAppointment([])
    setFullTime(null)

  };

  const availableApp =()=>(
    (selectedDate&&selectedDoctorId)&&getAvailableAppointment()
    
  )

  useEffect(()=>{
    setFullTime(null)
    setAvailableAppointment([])
    availableApp()
  },[selectedDate])

  const handleFullTimeSelect = (value) => {
    console.log(value)
    setFullTime(value);

  };

console.log("##",selectedDate)
console.log("@@",fullTime)

return (
<div>
    <div  style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"100%", marginBottom:"15%"}}>

        <div style={{  padding:"3%"}}>

      <h3 style={{color:"#458EF6"}}>Book appointment</h3>
<br></br>
<br></br>

      <Form form={form} style={{width:"100%"}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Form.Item
          name="doctorId"
          label="Doctor"
          rules={[{ required: true, message: 'Please select a doctor' }]}
          style={{ flex: 1, marginRight: '1%' }}
        >
          <Select placeholder="Select a doctor" onSelect={handleDoctorSelect}  value={selectedDoctorId} allowClear>
            {doctors?.map((item) => (
              <Option key={item.doctorId} value={item.doctorId}>
                {item.fullName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="selectedDate"
          label="Date"
          rules={[{ required: true, message: 'Please select a date' }]}
          style={{ flex: 1, marginRight: '1%' }}
        >
          <DatePicker style={{ width: '100%' }}
           onChange={handleDateSelect}
            disabled={selectedDoctorId===null }
            allowClear/>
        </Form.Item>
        <Form.Item
          name="time"
          label="Time"
          rules={[{ required: true, message: 'Please select a time' }]}
          style={{ flex: 1 }}
        >
          <Select placeholder="Select a time" 
          onSelect={handleFullTimeSelect} 
          disabled={ availableAppointment?.length===0}  
          value={fullTime === null ? "" : moment(fullTime).format("HH:mm")}
          allowClear>
            {availableAppointment?.map((time) => (
              <Option key={time} value={time}>
                {moment(time).format("HH:mm")}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <Form.Item style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
        <Button type="primary" htmlType="submit" onClick={createAppointment}>
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
</div>
)
}
export default BookAppointmet;