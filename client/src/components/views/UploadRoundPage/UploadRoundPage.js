import React, {useState} from 'react'
import {Divider, Typography, Button, Form, message, Input, Icon, DatePicker} from 'antd';
import moment from 'moment'
import Axios from 'axios';
import NavBar from '../NavBar/NavBar'
import '../UploadRoundPage/upload.css'

const dateFormat = 'YYYY/MM/DD'
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY'];

const {Title} = Typography;
const {TextArea} = Input;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function UploadRoundPage(props) {
    
    const [NameValue, setNameValue] = useState("")
    
    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    
    const [CourseValue, setCourseValue] = useState("")
    
    const onCourseChange = (event) => {
        setCourseValue(event.currentTarget.value)
    }
    const [HolesValue, setHolesValue] = useState()
    
    const onHolesChange = (event) => {
        setHolesValue(event.currentTarget.value)
    }
    const [ParValue, setParValue] = useState()
    
    const onParChange = (event) => {
        setParValue(event.currentTarget.value)
    }
    
    const [ScoreValue, setScoreValue] = useState()
    
    const onScoreChange = (event) => {
        setScoreValue(event.currentTarget.value)
    }

    const [DateValue, setDateValue] = useState("")
    
    const onDateChange = (event) => {
        
         setDateValue(event.currentTarget.value)   
         
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(!NameValue || !CourseValue || !HolesValue || !ScoreValue || !ParValue){
            return alert("Please fill in all the required fields.")
        }

        const variables = {
            writer: props.user.userData._id,
            name: NameValue,
            course: CourseValue,
            holes: HolesValue,
            score: ScoreValue,
            par: ParValue,
            date: DateValue
        }

    Axios.post('/api/round/uploadRound' , variables)
        .then(response => {
            if(response.data.success){
                alert('Round successfully uploaded!')
                props.history.push("/")
            }else{
                alert('Failed to upload round')
            }
        })
    }

    
    return (
        <div>
        <NavBar/>
        <div className = "app">
            <br/>
            <br/>
                <Title level = {2} > Add Round</Title>
            <br/>
            <br/>

        <Form onSubmit = {onSubmit} style = {{width: '350px'}}>
            <div>
            <Form.Item required>
            
            <div className = "why"><strong>Name</strong></div>
            <input
                type = "text"
                className = "inpuut"
                onChange = {onNameChange}
                value = {NameValue}
                placeholder="e.g. Practice Round"
            />
            
            </Form.Item>
            </div>
            <Divider plain/>
            <div>
            <Form.Item required>
            <div className = "why"><strong>Date</strong></div>
            <input
            onChange = {onDateChange}
            className = "center"
            type = "date"
            />
            </Form.Item>
            </div>
            <Divider plain/>
            <div>
            <Form.Item required>
            <div className = "why"><strong>Course</strong></div>
            <input
                type = "text"
                onChange = {onCourseChange}
                value = {CourseValue}
                placeholder="e.g. St. Andrews"
            />
            </Form.Item>
            </div>
            <Divider plain/>
            <div>
            <Form.Item required >
            <div className = "why"><strong>Holes Played</strong></div>
            <input
                onChange = {onHolesChange}
                value = {HolesValue}
                type = "number"
                min = {9}
                max = {18}
                step = {9}
                placeholder="9 or 18"
            />
            </Form.Item>
            </div>
            <Divider plain/>
            <div>
            <Form.Item required>
            <div className = "why"><strong>Par</strong></div>
            <input
            className = "center"
                onChange = {onParChange}
                value = {ParValue}
                type = "number"
                placeholder="e.g. 72"
            />
            </Form.Item>
            </div>
            <Divider plain/>
            <Form.Item required>
            <div className = "why"><strong>Score</strong></div>
            <input
            className = "center"
                onChange = {onScoreChange}
                value = {ScoreValue}
                type = "number"
                placeholder="e.g. 59"
            />
            </Form.Item>
            <br/>
            <Button
                className = "button"
                type = "text"
                shape = "round"
                onClick = {onSubmit}
            >
                Save
            </Button>
        </Form>


        </div>
        </div>
    )
}

export default UploadRoundPage
