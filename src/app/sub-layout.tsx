'use client'

import { Card, DragWrapper, Footer, Header } from "@/components"
import { useNote } from "@/contexts/NoteProvider"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SubLayout = (props: Props) => {
    const { children } = props;
    const { note } = useNote();

    return (
        <main className="relative min-w-screen min-h-full">
            <Header />
            {children}
            <Footer />
            <DragWrapper>
                <Card {...note} />
            </DragWrapper>
        </main>
    )
}

export default SubLayout