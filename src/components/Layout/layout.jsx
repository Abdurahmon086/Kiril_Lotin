import Footer from "../Footer/footer"
import Header from "../Header/header"

function Layout({ children }) {
    return (
        <div className="flex flex-col  h-[100vh] bg-blue-50">
            <header className="bg-gray-800 ">
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer className="mt-auto bg-gray-800 py-8">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout