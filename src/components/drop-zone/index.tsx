import React from 'react';

const Dropzone = () => {
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(data);
        if (draggableElement) {
            draggableElement.style.position = 'absolute';
            draggableElement.style.left = `${event.clientX}px`;
            draggableElement.style.top = `${event.clientY}px`;
            event.currentTarget.appendChild(draggableElement);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            Drop here!
        </div>
    );
};

export default Dropzone;
