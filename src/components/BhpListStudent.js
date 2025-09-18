import React, { useState } from 'react'
import BhpFormStudent from './BhpFormstudent';

export default function BhpListStudent() {
    // mock data
    const studentsInit = [
        { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội", email: "vana@gmail.com" },
        { id: 2, name: "Trần Thị B", age: 21, address: "Hải Phòng", email: "thib@gmail.com" },
        { id: 3, name: "Lê Văn C", age: 19, address: "Nam Định", email: "vanc@gmail.com" },
        { id: 4, name: "Phạm Thị D", age: 22, address: "Thanh Hóa", email: "thid@gmail.com" },
        { id: 5, name: "Hoàng Văn E", age: 20, address: "Nghệ An", email: "vane@gmail.com" }
    ];
    // state
    const [students, setStudent] = useState(studentsInit)

    // add
    const handleSubmit = (param) => {
        console.log("param:", param);

        const newStudents = [...students, param];
        setStudent(newStudents)
    }

    return (
        <div>
            <h2>DANH SÁCH SINH VIÊN</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Quê quán</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((stud, index) => (
                            <tr key={index}>
                                <td>{stud.id}</td>
                                <td>{stud.name}</td>
                                <td>{stud.age}</td>
                                <td>{stud.address}</td>
                                <td>{stud.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <BhpFormStudent onSubmit={handleSubmit} />
        </div>
    )
}
