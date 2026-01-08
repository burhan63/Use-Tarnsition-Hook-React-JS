import { startTransition, useTransition } from "react";
import { useFormStatus } from "react-dom";

function FormValidation() {

    const [pending,startTransition] = useTransition();

    function HandleButton(){

         startTransition(async()=>{
             await new Promise(res=>(setTimeout(res,5000)));
             console.log("Button Clicked");
         });
    }


    return (
        <div>
            <h1>Use Transition - React JS</h1>
            {
                pending?
                <img style={{height:"100px",width:"100px"}} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700">
                </img>: null
            }
            <button disabled={pending} onClick={HandleButton}>Click</button>
        </div>
    )
}

export default FormValidation;