import React from 'react';
import './Book.css';
import defaultBookImage from '../../assets/book.jpg';

function Books({ bookname, bookUrl }) {
    return (
        <div className="book-card row mx-0 mb-2 d-flex align-items-center">
            <div className="text-container col-8">
                <h3 className="book-title fs-5 mt-2">{bookname}</h3>
                <a href={bookUrl} target="_blank" rel="noopener noreferrer" className="btn-view">Download Book</a>
            </div>

            <div className="image-container col-4">
                <img src={defaultBookImage} alt="Book Cover" className="book-image" />
            </div>
        </div>
    );
}

export default Books;
