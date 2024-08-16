import { useState } from 'react';
import ViewCourse from '../ViewCourse/ViewCourse';
import './CourseCard.css';

const CourseCard = ({ subject, teacher, details, photo, handleDelete }) => {
    const [showViewCourse, setShowViewCourse] = useState(false);

    const handleOpenViewCourse = () => {
        setShowViewCourse(true);
    };

    const handleCloseViewCourse = () => {
        setShowViewCourse(false);
    };

    return (
        <div className='cards row mx-0 mb-2 d-flex align-items-center'>
            <div className='text-container col-8'>
                <p className='subject fs-5 mt-2'>{subject}</p>
                <p className='teacher fs-6'>{teacher}</p>
                <p className='fs-6'>{details}</p>

                <ViewCourse
                    courseName={subject}
                    teacher={teacher}
                    description={details}
                    image={photo} // Pass the photo URL as the image prop
                    show={showViewCourse}
                    onClose={handleCloseViewCourse}
                />
                <div className='btn-container d-flex justify-content-start mt-2'>
                    <button
                        className='btn-view'
                        onClick={handleOpenViewCourse}
                    >
                        View Course
                    </button>

                    <button
                        className='btn-view'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className='image-container col-4'>
                <img src={photo} alt={subject} className='course-image' />
            </div>
        </div>
    );
}

export default CourseCard;
