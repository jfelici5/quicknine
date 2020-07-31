import React, {useState} from 'react'
import {Typography, Button, Form, message, Input, Icon, DatePicker} from 'antd';
import moment from 'moment'
import Axios from 'axios';

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

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            writer: props.user.userData._id,
            name: NameValue,
            course: CourseValue,
            holes: HolesValue,
            score: ScoreValue,
            par: ParValue
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
        <div style = {{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <Title level = {2}> Add Round</Title>
            </div>

        <Form onSubmit = {onSubmit}>
            <label>Name (Optional)</label>
            <Input
                onChange = {onNameChange}
                value = {NameValue}
                placeholder="Sunday morning stroll"
                bordered = {false}
            />
            
            <label>Date</label>
            <br/>
            <DatePicker 
                defaultValue={moment(today, dateFormatList[0])} 
                format={dateFormatList}
                bordered = {false}
            />

            <br/>
            <label>Course</label>
            <Input
                onChange = {onCourseChange}
                value = {CourseValue}
                placeholder="Augusta National Golf Club"
                bordered = {false}
            />
            <label>Holes</label>
            <Input
                onChange = {onHolesChange}
                value = {HolesValue}
                type = "number"
                placeholder="18"
                bordered = {false}
            />
            <label>Par</label>
            <Input
                onChange = {onParChange}
                value = {ParValue}
                type = "number"
                placeholder="72"
                bordered = {false}
            />
            <label>Score</label>
            <Input
                onChange = {onScoreChange}
                value = {ScoreValue}
                type = "number"
                placeholder="68"
                bordered = {false}
            />

            <br/>
            <br/>

            <Button
                onClick = {onSubmit}
            >
                Save
            </Button>
        </Form>


            
        </div>
    )
}

export default UploadRoundPage
