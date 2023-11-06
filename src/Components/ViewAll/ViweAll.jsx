import { useLocation } from "react-router-dom";
import React from "react";

const ViewAll = () => {
    const location = useLocation();
    const stu = location.state;
    console.log("student", stu);

    return (
        <>
            <div className="container">
                <div className="row">
                    <h4 className="text-center">Student Form</h4>
                    <table className="table table-bordered student-table">
                        <tbody>
                            <tr>
                                <th>Name:-</th>
                                <td>{stu.name}</td>
                            </tr>
                            <tr>
                                <th>Email:-</th>
                                <td>{stu.Email}</td>
                            </tr>
                            <tr>
                                <th>Password:-</th>
                                <td>{stu.Password}</td>
                            </tr>
                            <tr>
                                <th>Mobile Number:-</th>
                                <td>{stu.number}</td>
                            </tr>
                            <tr>
                                <th>parent Number:-</th>
                                <td>{stu.pnumber}</td>
                            </tr>
                            <tr>
                                <th>Course:-</th>
                                <td>{stu.course}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ViewAll;
