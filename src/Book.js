import React from 'react';

export const Book = ({title="No Title",author="No Author",pages=0,freeBookMark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>Author : {author}</p>
        <p>Pages : {pages} pages</p>
        <p>Free Bookmark Today: {freeBookMark ? 'Yes': 'No'}</p>
      </section>
    )
}