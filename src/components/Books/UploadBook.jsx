import React, { useState } from 'react';
import axios from 'axios';
import './UploadBook.css';

const UploadBook = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [bookName, setBookName] = useState('');
    const [message, setMessage] = useState('');

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handle book name change
    const handleNameChange = (event) => {
        setBookName(event.target.value);
    };

    // Submit the form
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate inputs
        if (!selectedFile || !bookName) {
            setMessage("Please provide both the book name and the file.");
            return;
        }

        const formData = new FormData();
        formData.append('book', selectedFile);
        formData.append('name', bookName);

        try {
            const response = await axios.post('http://127.0.0.1:8080/api/Book/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage("Book uploaded successfully!");
            setBookName('');
            setSelectedFile(null);
        } catch (error) {
            console.error("Error uploading book:", error);
            setMessage("Error uploading book. Please try again.");
        }
    };

    return (
        <div className="upload-book-container">
            <h3 className="upload-book-title">Upload a New Book</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="upload-book-input"
                    type="text"
                    placeholder="Book Name"
                    value={bookName}
                    onChange={handleNameChange}
                    required
                />

                {/* Hidden file input */}
                <input
                    type="file"
                    id="file-upload"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    style={{ display: 'none' }} // Hide the file input
                />

                {/* Styled button to trigger file input */}
                <label htmlFor="file-upload" className="upload-book-button">
                    Choose File
                </label>

                <button className="upload-book-button" type="submit">Upload Book</button>
            </form>
            {message && <p className="upload-book-message">{message}</p>}
        </div>
    );
};

export default UploadBook;