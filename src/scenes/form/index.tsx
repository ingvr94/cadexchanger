import { useForm, SubmitHandler } from "react-hook-form";
import SubmitBtn from "../../shared/SubmitBtn";
import { Dispatch,SetStateAction } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

type IFormInput = {
    name:string
    email:string
    message:string
}

type FormProps={
    setToLoaded:Dispatch<SetStateAction<boolean>>
}

const Form = ({setToLoaded}:FormProps) => {
    
    const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput>=async(data:IFormInput)=>{
        try {
            const res=await axios.post('https://cadexchanger-server.vercel.app/?vercelToolbarCode=H_g-1XS2mP4TSA2', {
                name:data.name,
                email:data.email,
                message:data.message
            })
            setToLoaded(true)
            alert(res.data)
        }
        catch(err) {
            alert('Downloading error!')
            console.log(err)
        }
    }

  return (
    
    <form className="w-[320px] flex flex-col  shadow-lg bg-white rounded-lg p-4" onSubmit={handleSubmit(onSubmit)}> 
    <label className="mb-2">Name</label>
    {errors.name && (
                  <p className="text-xs text-red-500">
                   {errors.name.type === 'required' && 'This field is required.'}
                  </p>
    )}
     <input 
     placeholder="Value" 
     className="border-2 border-gray-200 rounded-lg px-3 py-2 mb-6" 
     {...register("name", { required: true, maxLength: 20 })} />

     <label className="mb-2">Email</label>
     {errors.email && (
                  <p className="text-xs text-red-500">
                   {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email.'}
                  </p>
        )}
     <input 
     placeholder="Value" 
     className="border-2 border-gray-200 rounded-lg px-3 py-2 mb-6" 
     {...register("email", { required:true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
     
    <label className="mb-2">Message</label>
    {errors.message && (
                  <p className="text-xs text-red-500">
                   {errors.message.type === 'required' && 'This field is required.'}
                  </p>
    )}
    <textarea 
    placeholder="Value" 
    className="border-2 border-gray-200 rounded-lg px-3 py-2 mb-6" 
    cols={10} rows={4}
    {...register("message",{required:true})}></textarea>

    <SubmitBtn />
    </form>
  )
}

export default Form