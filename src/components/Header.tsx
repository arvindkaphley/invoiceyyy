import {
    OrganizationSwitcher,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Container from './Container'
import Link from 'next/link'
const Header=()=>{
    return(
        <header className='mt-8 mb-12'>
            <Container>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex items-center gap-4'>
                <p className='font-bold'>
                    <Link href='/dashboard' className='flex items-center gap-2'> 
                    Invoiceyyy
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="mx-auto size-5"
                    >
                    <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                    </mask>
                    <g fill="#0A0A0A" mask="url(#a)">
                        <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                        <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                    </g>
                    </svg>
                    </Link>
                    
                </p>
                <span className='text-slate-400'>/</span>
                <SignedIn>
                    <span className='-ml-2'>
                    <OrganizationSwitcher />
                    </span>
                </SignedIn>
                </div>
                <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
            </div>
            </Container>
        </header>
    )
}
export default Header