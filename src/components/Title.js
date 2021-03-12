import React from 'react';

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="font-weight-bold text-title">{title}</h1>
            </div>
        </div>
    )
}
