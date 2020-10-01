import React from 'react'
import fetch from 'isomorphic-fetch'
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'

import { Layout } from '../components/Layout/Layout'
import { StudentList } from '../components/StudentList'
import {StudentProfileEdit} from '../components/StudentProfile'

export const Home = ({ students = []}) => {
  
  const [studentProfile, setStudentProfile] = useState({
    first_name: "",
    last_name: "",
    id: uuidv4(),
  })

  
  return (
    <Layout title="Homepage">
      <h1>Students</h1>
      <StudentList students={students} />
      <h3>Add new student</h3>
      <StudentProfileEdit studentProfile={studentProfile} setStudentProfile={setStudentProfile} />
    </Layout>
)}

Home.getInitialProps = async (ctx) => {
  let body = await fetch('http://localhost:3000/api/student')
  body = await body.json()

  return {
    students: body.data
  }
}

export default Home
