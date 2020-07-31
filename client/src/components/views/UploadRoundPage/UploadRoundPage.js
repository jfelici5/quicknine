import React, {useState} from 'react'
import {Typography, Button, Form, message, Input, Icon} from 'antd';

const {Title} = Typography;
const {TextArea} = Input;
function UploadRoundPage() {
    
    const [NameValue, setNameValue] = useState("")
    
    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    
    const [CourseValue, setCourseValue] = useState("")
    
    const onCourseChange = (event) => {
        setCourseValue(event.currentTarget.value)
    }
    const [HolesValue, setHolesValue] = useState(0)
    
    const onHolesChange = (event) => {
        setHolesValue(event.currentTarget.value)
    }
    const [ParValue, setParValue] = useState(0)
    
    const onParChange = (event) => {
        setParValue(event.currentTarget.value)
    }
    const [ScoreValue, setScoreValue] = useState(0)
    
    const onScoreChange = (event) => {
        setScoreValue(event.currentTarget.value)
    }
    return (
        <div style = {{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <Title level = {2}> Add Round</Title>
            </div>

        <Form onSubmit>

            <br />
            <br />
            <label>Name (Optional)</label>
            <Input
                onChange = {onNameChange}
                value = {NameValue}
            />
            <label>Date</label>
            <Input
                onChange
                value
            />
            <label>Course</label>
            <Input
                onChange = {onCourseChange}
                value = {CourseValue}
            />
            <label>Holes</label>
            <Input
                onChange = {onHolesChange}
                value = {HolesValue}
                type = "number"
            />
            <label>Par</label>
            <Input
                onChange = {onParChange}
                value = {ParValue}
                type = "number"
            />
            <label>Score</label>
            <Input
                onChange = {onScoreChange}
                value = {ScoreValue}
                type = "number"
            />
        </Form>


            
        </div>
    )
}

export default UploadRoundPage
