
const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="container mx-auto">
            <div className="flex h-[80px] justify-center align-center text-center">
                <div className="st-copyright-text py-4 text-center">
                    &copy; {currentYear}. Designed by Mikey Sharma. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer