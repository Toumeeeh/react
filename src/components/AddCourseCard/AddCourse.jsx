import '../Courses/Courses.css';
import { useEffect, useState } from 'react';
import AddCourseCard from './AddCourseCard';
import axios from 'axios';

const AddCourse = () => {
    const [AddCourseData, setAddCourseData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/course/pending')
            .then((res) => {
                if (res.data.status === true) {
                    setAddCourseData(res.data.data);
                } else {
                    console.error('Error fetching courses:', res.data.message);
                }
            })
            .catch((err) => {
                console.error('Error fetching pending courses:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const approveCourse = (id) => {
        axios.post(`http://127.0.0.1:8080/api/course/approved/${id}`)
            .then(() => {
                setAddCourseData(prevCourses => prevCourses.filter(course => course.id !== id));
            })
            .catch((err) => {
                console.error('Error approving course:', err);
            });
    };

    const deleteCourse = (id) => {
        axios.delete(`http://127.0.0.1:8080/api/course/delete/${id}`)
            .then(() => {
                setAddCourseData(prevCourses => prevCourses.filter(course => course.id !== id));
            })
            .catch((err) => {
                console.error('Error deleting course:', err);
            });
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className='explore'>Waiting to Approve</div>
            </div>
            <div style={{ height: '65vh', overflowY: 'scroll' }} className='mt-3 d-flex flex-wrap justify-content-center'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    AddCourseData.map((course) => (
                        <AddCourseCard
                            key={course.id}
                            subject={course.name}
                            teacher={`Teacher ID: ${course.user_id}`}  // Adjust if needed
                            details={course.description}
                            photo={`http://127.0.0.1:8080${course.photo}`}
                            handleDelete={() => deleteCourse(course.id)}
                            handleAdd={() => approveCourse(course.id)}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default AddCourse;
