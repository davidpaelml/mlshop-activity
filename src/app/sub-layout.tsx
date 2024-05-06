'use client'

import { Card, DragWrapper } from "@/components"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SubLayout = (props: Props) => {
    const { children } = props;
    return (
        <div className="relative flex flex-col min-w-screen min-h-screen">
            {children}
            <DragWrapper>
                <Card />
            </DragWrapper>
        </div>
    )
}

export default SubLayout