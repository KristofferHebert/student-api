import React from 'react'
import Link from 'next/link'

import {StudentProps} from '../types/student'

interface StudentItemProps {
    data: StudentProps;
}
const StudentItem: React.FC<StudentItemProps> = ({ data }) => (
    <li><Link href={`student/${data.id}`} as={`student/${data.id}`} ><a>{data.first_name} {data.last_name}</a></Link></li>
)

interface StudentListProps {
    students: StudentProps[];
}

export const StudentList: React.FC<StudentListProps> = ({ students }) => (
    <ul>
        {students.map(student => <StudentItem data={student} key={student.first_name + student.last_name} />)}
    </ul>
)

export default StudentList