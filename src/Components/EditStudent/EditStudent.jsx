import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import GetData from "../../Utils/GetData";

const EditStudent = () => {
    const { state } = useLocation();
    console.log('state', state);

    const [student, setStudent] = useState(state);

    const navigate = useNavigate();



    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setStudent({ ...student, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        let stude = GetData();

        let newStudent = stude.map((stu) => {
            if (stu.id == student.id) {

                return stu = student

            }
            return stu;
        })
        localStorage.setItem("students", JSON.stringify(newStudent))
        navigate('/ViewPage');

    }


    return (

        <>
            <div className="container">
                <Form className='pt-3' onSubmit={handleSubmit}>
                    <h2>Edit</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter The Name" name='name' value={student.name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" placeholder="Enter The Email" name='Email' value={student.Email} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="pass" placeholder="Enter The Password" name='Password' value={student.Password} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter The Monile number" name='number' value={student.number} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Parent Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter the parent number" name='pnumber' value={student.pnumber} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="course" placeholder="Enter the course" name='course' value={student.course} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </>

    )

}
export default EditStudent;