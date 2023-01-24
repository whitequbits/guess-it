function Header(props: any) {
    return (
    <header className="sticky top-0 z-10">
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="block lg:inline-block text-blue-200">
                ABC123
            </div>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Guess It !!!</span>
            </div>
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white">Exit</a>
            </div>
        </nav>
    </header>);
}

export default Header;