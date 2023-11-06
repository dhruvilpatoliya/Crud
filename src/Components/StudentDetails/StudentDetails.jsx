import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import GetData from '../../Utils/GetData';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
const StudentDetails = () => {

  const [student, setStudent] = useState({
    name: '',
    Email: '',
    Password: '',
    number: '',
    pnumber: '',
    course: '',

  })

  const [students, setStudents] = useState(GetData());
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isIndex, setIsIndex] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setStudent({ ...student, [name]: value });
  }

  const handleEdit = (id, index) => {

    // console.log("Edit");
    const data = GetData();
    const singleStudent = data.filter((stu) => {

      return stu.id == id;

    })
    console.log("singleStudent", singleStudent);
    setStudent(singleStudent[0]);
    setIsEdit(true);
    setIsIndex(index);

  }


  const handleDelete = (id) => {

    let stude = GetData();
    const sp = stude.filter((stu) => {
      return stu.id != id;
    })
    setStudents(sp);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!isEdit) {
      const uid = Math.floor(Math.random() * 1000);
      console.log(uid);

      const newStudent = { ...student, id: uid }
      setStudents([...students, newStudent]);
      // console.log('newStudent', newStudent);
      // console.log("student" , student);

    } else {
      console.log("Edit", isEdit);
      let std = GetData();
      std[isIndex] = student;
      console.log("std", std);

      setStudents(std);
      console.log("isIndex", isIndex);
      setIsEdit(false);
      setIsIndex(null);
    }
    setStudent({
      name: '',
      Email: '',
      Password: '',
      number: '',
      pnumber: '',
      course: '',
    })

    setIsSubmit(true)

  }

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
    if (isSubmit) {
      navigate('/ViewPage');
    }
  }, [students]);

  
  return (

    <>
      <div className="container">
        <Form className="pt-3" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter The Name" name="name" value={student.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter The Email" name="Email" value={student.Email} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter The Password" name="Password" value={student.Password} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="number" placeholder="Enter The Mobile Number" name="number" value={student.number} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridParentNumber">
              <Form.Label>Parent Number</Form.Label>
              <Form.Control type="number" placeholder="Enter the parent number" name="pnumber" value={student.pnumber} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCourse">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Enter the course" name="course" value={student.course} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            {isEdit ? "Update" : "Submit"}
          </Button>
        </Form>

      </div>

    </>

  )

}
export default StudentDetails;