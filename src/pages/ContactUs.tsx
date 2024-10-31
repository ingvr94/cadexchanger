import Form from "../scenes/form"
import { useState } from "react"

const ContactUs = () => {

    const [isLoaded,setToLoaded]=useState<boolean>(false)
  return (
    <section id='form' className="flex flex-col bg-gray-200 items-center justify-center h-5/6">
        {isLoaded ?
          <div className=" md:text-8xl mb-5 font-bold">Message generated on the server</div>
        :
        <>
            <div className="text-4xl md:text-8xl mb-5 font-bold">Only CTA on the page</div>
            <Form setToLoaded={setToLoaded}/> 
        </>
        }
    </section>
  
  )
}

export default ContactUs