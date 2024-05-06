'use client'

import { Card, DragWrapper } from "@/components"
import { useNote } from "@/contexts/NoteProvider"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SubLayout = (props: Props) => {
    const { children } = props;
    const { note } = useNote();
    
    return (
        <div className="relative flex flex-col min-w-screen min-h-screen">
            {children}
            <DragWrapper>
                <Card {...note} />
            </DragWrapper>
        </div>
    )
}

export default SubLayout