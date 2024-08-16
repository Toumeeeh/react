import './ViewCourse.css';

const ViewCourse = ({ show, onClose, courseName, teacher, description, image }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="view-course-overlay">
            <div className="view-course">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="view-course-content">
                    {image && <img src={image} alt={courseName} className="course-image" />}
                    <h1 className='subject'>{courseName}</h1>
                    <h5 className='teacher'>{teacher}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewCourse;
