import { useEffect, useState } from "react"
import ContactBtn from "../../shared/ContactBtn"
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const Navbar=()=> {

const [scroll,setScroll]=useState(0)

const handleScroll=()=>setScroll(document.documentElement.scrollTop)

useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
},[])


  return (
  <header>
    <div className= {` ${scroll!==0 && 'fixed z-30 top-0'} flex items-center bg-white justify-between  py-6 md:py-12 px-4 md:pl-8 md:pr-32 w-full border-b-2 border-b-slate-200`}>
        <div className="md:text-2xl text-lg font-bold">
           <Link component={RouterLink} to='/home' underline="none" color="black" >
            Some Company
           </Link> 
        </div>
        <ContactBtn />
        </div>
  </header>
)}

export default Navbar
