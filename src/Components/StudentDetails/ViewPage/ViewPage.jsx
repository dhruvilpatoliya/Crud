import { useEffect, useState } from "react";
import GetData, { filterCou } from "../../../Utils/GetData";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router";

const ViewPage = () => {
    const navigate = useNavigate();

    const [students, setStudents] = useState(GetData());
    const [filterValue, setFilterValue] = useState(filterCou);

    const handleDelete = (id) => {
        const updatedStudents = students.filter((stu) => stu.id !== id);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    }

    const handleEdit = (id, index) => {
        const stu = students.find((stu) => stu.id === id);
        navigate('/EditStudent', { state: stu });
    }

    useEffect(() => {
        setFilterValue(filterCou);
    }, [students]);

    const handleFilter = (e) => {
        const value = e.target.value;
        let alldata = GetData();
        let filterdata = alldata.filter((det) => {
            if (value == -1) {
                return det;
            } else {
                return value === det.course.toLowerCase();
            }
        });
        setStudents(filterdata);
    }

    const handleView = (stu) => {
        navigate("/ViewAll", { state: stu });
    }

    return (
        <div className="container">
            <h2 className='pt-4 fw-normal'>Student Details</h2>
            <select onChange={handleFilter}>
                <option value={-1}>all</option>
                {filterValue.map((stu) => (
                    <option key={stu}>{stu.toLowerCase()}</option>
                ))}
            </select>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>number</th>
                        <th>pnumber</th>
                        <th>course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu, index) => (
                        <tr>
                           <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.name}`
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.Email}`
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.Password}`
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.number}`
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.pnumber}`
                                        }
                                    </td>
                                    <td>
                                        {
                                            `${stu.course}`
                                        }
                                    </td>
                                 <td>
                                <button variant="primary" onClick={() => handleEdit(stu.id, index)}>
                                    Edit
                                </button>
                                |||||
                                <button variant="primary" onClick={() => handleDelete(stu.id)}>
                                    Delete
                                </button>
                                |||||
                                <button variant="primary" onClick={() => handleView(stu)}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewPage;
