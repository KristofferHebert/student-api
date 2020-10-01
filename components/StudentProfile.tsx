
import React, {useState} from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import {StudentProps} from '../types/student'

interface StudentProfileEditProps {
    studentProfile: StudentProps;
    setStudentProfile: (object) => void;
    setEditing?: (boolean) => void;
}

export const StudentProfileEdit: React.FC<StudentProfileEditProps> = ({ studentProfile, setStudentProfile, setEditing}) => {

    const handleChange = (e) => {
        let update = {
            ...studentProfile,
            [e.target.id]: e.target.value
        }

        setStudentProfile(update)

    }

    const submitUpdate = (data) => {
        return async (e) => {
            e.preventDefault()
            let response = await fetch('http://localhost:3000/api/student/' + data.id, {
                method: 'POST',
                body: JSON.stringify(data)
            })

            if(setEditing){
                setEditing(false)
            } else {
                Router.push('/')
            }

        }
    }

    return (
    <form className="pure-form pure-form-stacked" onSubmit={submitUpdate(studentProfile)}>
        <fieldset>
            <label htmlFor="first_name">First Name
            <input value={studentProfile.first_name} placeholder="First Name" id="first_name" type="text" onChange={handleChange} required/></label>
            <label htmlFor="last_name">Last Name
            <input value={studentProfile.last_name} placeholder="Last Name" id="last_name" type="text" onChange={handleChange} required/></label>
            <input type="submit" className="pure-button pure-button-primary" value="submit" />
        </fieldset>
    </form>)
}


export const StudentProfile = ({ student }) => {
    const [isEditing, setEditing] = useState(false)
    const [studentProfile, setStudentProfile] = useState(student)
    const handleEditing = (val) => (e) => {
        e.preventDefault()
        setEditing(val)
    }

    if(isEditing) return <StudentProfileEdit studentProfile={studentProfile} setStudentProfile={setStudentProfile} setEditing={setEditing} />

    return (
        <div>
            <h3>{studentProfile.first_name} {studentProfile.last_name} <a href="#" onClick={handleEditing(true)}>[edit]</a></h3>
        </div>
    )
}

export default StudentProfile