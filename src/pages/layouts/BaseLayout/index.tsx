
export interface BaseLayoutProps {
    children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
    <>
        <header>Test Header</header>
        <body>
            {children}
        </body>
    </>
    );
}