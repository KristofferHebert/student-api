import React from 'react'
import fetch from 'isomorphic-fetch'
import DefaultErrorPage from 'next/error'

import { StudentProfile } from '../../components/StudentProfile'
import { Layout } from '../../components/Layout/Layout'

export const Student = ({ student }) => {

  if(!student) return <DefaultErrorPage statusCode={404} />

    return (<Layout title={`Student Profile: ${student.first_name} ${student.last_name}`}>
      <h1>Students</h1>
      <StudentProfile student={student} />
    </Layout>)
}

Student.getInitialProps = async ({ res, query }) => {

  let body = await fetch('http://localhost:3000/api/student/' + query.id)
  body = await body.json()

  return {
    student: body.data
  }
}

export default Student