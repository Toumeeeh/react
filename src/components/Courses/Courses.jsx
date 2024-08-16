import { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';
import ViewCourse from '../ViewCourse/ViewCourse'; // Ensure this path is correct

const Courses = () => {
    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showViewCourse, setShowViewCourse] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/course/get')
            .then((res) => {
                if (res.data.status === true) {
                    setCourseData(res.data.data);
                }
            })
            .catch((err) => {
                console.error('Error fetching courses:', err);
            });
    }, []);

    const handleViewCourse = (course) => {
        setSelectedCourse(course);
        setShowViewCourse(true);
    };

    const handleCloseViewCourse = () => {
        setShowViewCourse(false);
        setSelectedCourse(null);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className='explore'>Explore Courses</div>
            </div>
            <div style={{ height: '65vh', overflowY: 'scroll' }} className='mt-3 d-flex flex-wrap justify-content-center'>
                {courseData.map((course) => (
                    <CourseCard
                        key={course.id}
                        subject={course.name}
                        teacher={`Teacher ID: ${course.user_id}`}
                        details={course.description}
                        photo={`http://127.0.0.1:8080${course.photo}`}
                        handleDelete={() => {/* handle delete logic */}}
                        handleView={() => handleViewCourse(course)}
                    />
                ))}
            </div>
            {selectedCourse && (
                <ViewCourse
                    show={showViewCourse}
                    onClose={handleCloseViewCourse}
                    courseName={selectedCourse.name}
                    teacher={selectedCourse.user_id}
                    description={selectedCourse.description}
                />
            )}
        </>
    );
};

export default Courses;
