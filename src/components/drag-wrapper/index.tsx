import interact from "interactjs";
import React, { ReactNode, useEffect, useMemo, useRef, } from "react";

type Props = {
    children: ReactNode
}

const DragWrapper = (props: Props) => {
    const { children } = props
    const draggableRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (draggableRef.current) {
            interact('.draggable')
                .draggable({
                    inertia: true,
                    modifiers: [
                        interact.modifiers.restrictRect({
                            restriction: 'parent',
                            endOnly: true
                        })
                    ],
                    autoScroll: true,

                    listeners: {
                        move: dragMoveListener,
                        // end: (event) => {
                        //     const textEl = event.target.querySelector('p');

                        //     if (textEl) {
                        //         textEl.textContent =
                        //             'moved a distance of ' +
                        //             (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        //                 Math.pow(event.pageY - event.y0, 2) | 0))
                        //                 .toFixed(2) + 'px';
                        //     }
                        // }
                    }
                });
        }
    }, []);

    const dragMoveListener = (event: any) => {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x.toString());
        target.setAttribute('data-y', y.toString());
    };

    return (
        <div
            ref={draggableRef}
            className="draggable absolute"
        >
            {children}
        </div>
    );
};

export default DragWrapper;
