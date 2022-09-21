import React from "react"

interface PropsChildren {
    children: React.ReactNode
}

export const Layout: React.FC<PropsChildren> = ({ children }) => {
    return (
        <>
            <header>
                <h1>header</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h3>footer</h3>
            </footer>
        </>
    )
}