import React from 'react';
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';

const BookList = ({books})  =>{
    if(!books.length){
        return <h3>There are no books currently in the library...</h3>
    }

    return (
        <div>
            {books && books.map((book) => 
                <Card outline color="secondary" key={book._id}>
                    <CardHeader>Title: {book.title}</CardHeader>
                    <CardBody>
                        <CardTitle>Author's name is: {book.author} </CardTitle>
                        <CardText>Number of pages: {book.pages} </CardText>
                    </CardBody>
                </Card>
            )}
        </div>
    )
};

export default BookList;