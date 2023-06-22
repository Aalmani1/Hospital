import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Form, DatePicker, Select, Button,message ,Input} from 'antd';
import moment from "moment/moment";
const { Option } = Select;


const CreateDoctor =()=>{
    const [firstName , setFirstName]=useState("");
    const[lastName , setLastName]=useState("")
    const[email , setEmail]=useState("")
    const[phoneNumber , setPhoneNumber]=useState("")
    const[usename , setUsername]=useState("")
    const[password , setPassword]=useState("")
    const [isLoading , setIsLoading]=useState(false)


    const createPatient = async () => {
      setIsLoading(true);
        try {
          const response = await axios.post('https://localhost:44381/api/hospital/add-doctor', {
            fullName: `${firstName+lastName }`,
            phoneNumber: phoneNumber,
            userName: usename,
            password: password
          });
          // Show success message
          message.success('Doctor created successfully');
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

      const handleSubmit = (event) => {
        event.preventDefault();
        createPatient();
      };
    

const clearForm=()=>(
setEmail(""),
setFirstName(""),
setLastName(""),
setPassword(""),
setPhoneNumber(""),
setUsername("")
)

return (
<div>
    <div  style={{backgroundColor:"#fff" , borderRadius:"8px" , color:"black" , width:"100%", marginBottom:"15%"}}>

        <div style={{  padding:"3%"}}>

      <h3 style={{color:"#458EF6"}}>Create Doctor</h3>
<br></br>
<br></br>

<Form 
disabled={isLoading}
                                    style={{
                                        margin:"5%",
                                        marginTop:"1%"
                                      }}
                                      scrollToFirstError>
<div style={{display:"flex" , flexDirection:"row",justifyContent:"space-around"}}>
<div style={{width: "49%"}}>

                                    <Form.Item
                                    name="firstName"
                                >
                                    <label style={{color:"black",textAlign:"left"}}>First Name : </label>
                                    <Input 
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    placeholder="First Name" 
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item> 
                                    <label style={{color:"black",textAlign:"left"}}>Last Name : </label>
                                    <Input 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item >
                                    <label style={{color:"black",textAlign:"left"}}>Email : </label>
                                    <Input 
                                    placeholder="Email"       
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    style={{color:"black"}}
                                    type="email"
                                    />
                                    </Form.Item>
                                    </div>

                                    <div style={{width: "49%"}}>
                                    <Form.Item>
                                    <label style={{color:"black",textAlign:"left"}}>Mobile Number : </label>
                                    <Input 
                                    placeholder="Mobile Number"
                                    value={phoneNumber}
                                    onChange={(e)=>setPhoneNumber(e.target.value)}
                                    style={{color:"black"}}
                                    type="number"
                                     />
                                    </Form.Item>

                                    <Form.Item>
                                    <label style={{color:"black",textAlign:"left"}}>Username : </label>
                                    <Input 
                                    value={usename}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    placeholder="User Name" 
                                    style={{color:"black"}}
                                    />
                                    </Form.Item>

                                    <Form.Item >
                                    <label style={{color:"black",textAlign:"left"}}>Password : </label>
                                    <Input 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Password" 
                                    style={{color:"black"}}
                                    type="password"
                                    />
                                    </Form.Item>

                                    </div>

                                    
                                    </div>
                                    <Form.Item >
                                    <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    onClick={handleSubmit}
                                    disabled={usename==="" || password===""||firstName===""||lastName===""||email===""||phoneNumber===""}

                                    >
                                    Register
                                    </Button>
                                    </Form.Item>

                                    </Form>
      </div>
    </div>
</div>
)
}

export default CreateDoctor;