import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";
import Navbar from '../../components/NavBar/NavBar';
import Courses from '../../components/Courses/Courses';
import AddCourse from '../../components/AddCourseCard/AddCourse';
import Books from '../../components/Books/Books';
import UploadBook from '../../components/Books/UploadBook.jsx'; // Add this line

function Dashboard(props) {
    const [BooksData, setBooksData] = useState([]);
    const [isUploadVisible, setIsUploadVisible] = useState(false); // State to track visibility

    // Effect to fetch books data
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8080/api/Book/index');
                setBooksData(res.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Function to toggle upload visibility
    const toggleUploadVisibility = () => {
        setIsUploadVisible(prevState => !prevState);
    };

    return (
        <>
            <Navbar />
            <div className="row mx-0">
                <div className="col-4">
                    <Courses />
                </div>
                <div className="col-4">
                    <AddCourse />
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className='explore'> Books </div>
                    </div>
                    {/* Button to toggle visibility of UploadBook */}
                    <button className="btn btn-primary" onClick={toggleUploadVisibility}>
                        {isUploadVisible ? 'Hide Upload Book' : 'Show Upload Book'}
                    </button>
                    {isUploadVisible && (
                        <UploadBook /> // Render the UploadBook component based on visibility
                    )}
                    <div className='mt-3' style={{ height: '65vh', overflow: 'scroll' }}>
                        {BooksData.map((book) => (
                            <Books
                                key={book.id}
                                bookname={book.name}
                                bookUrl={`http://127.0.0.1:8080${book.book}`} // Use this for the URL
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;