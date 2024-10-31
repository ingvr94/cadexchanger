import { Link } from "@mui/material"


const ContactBtn = () => {
  return (
    <button
    className="middle none rounded-lg bg-gray-900 py-2 px-12 text-center align-middle  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  >
    <Link href='/contactus' underline="none" color="white" >
        Contact us
    </Link>
  </button>
  )
}

export default ContactBtn