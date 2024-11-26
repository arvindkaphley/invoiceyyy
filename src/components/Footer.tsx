import Container from "./Container"

const Footer=()=>{
    return(
        <footer className='mt-6 mb-8'>
            <Container className="flex justify-between gap-4">
                <p className="text-sm">
                    Invoiceyyy &copy;{new Date().getFullYear()}
                </p>
                <p className="text-sm">
                    Created by Arvind Kaphley with Next.js, Xata, and Clerk
                </p>
            </Container>
        </footer>
    )
}
export default Footer