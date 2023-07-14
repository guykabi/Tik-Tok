import {toast} from 'react-toastify'



export const handleToast = (type:string,text:string) =>{
    const valid = ['error','warning','success']
    if(!valid.includes(type)) return
  
    switch(type) {
      case 'error':
        return toast.error(text,{
          position:'top-center'
        })
       
      case 'warning':
        return toast.warning(text,{
          position:'top-left'
        })
        
      case 'success':
        return toast.success(text,{
          position:'top-center'
        })
        
      default:
        return null
    }
  }