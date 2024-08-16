import './AddCourseCard.css'; // Ensure this file exists and is correctly named

const AddCourseCard = ({ subject, teacher, details, photo, handleDelete, handleAdd }) => {
    return (
        <div className='cards row mx-0 mb-2 d-flex align-items-center'>
            <div className='text-container col-8'>
                <p className='subject fs-5 mt-2'>{subject}</p>
                <p className='teacher fs-6'>{teacher}</p>
                <p className='fs-6'>{details}</p>

                <div className='btn-container d-flex justify-content-start mt-2'>
                    <button
                        className='btn-view'
                        onClick={() => alert('View Course button clicked')}
                    >
                        View Course
                    </button>

                    <button
                        className='btn-view'
                        onClick={handleAdd}
                    >
                        Approve
                    </button>

                    <button
                        className='btn-view btn-danger'
                        onClick={handleDelete}
                    >
                        Reject
                    </button>
                </div>
            </div>

            <div className='image-container col-4'>
                {photo && <img src={photo} alt={subject} className='course-image' />}
            </div>
        </div>
    );
}

export default AddCourseCard;
