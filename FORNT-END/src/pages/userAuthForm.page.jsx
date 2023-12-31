
import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png"
import { Link } from 'react-router-dom';
const UserAuthForm = ({ type }) =>{
    return(
       <AnimationWrapper keyValue={type}>
             <section className="h-cover flex items-center justify-center">
                <form action="" className="w-[80%]  max-w-[400px]">

                <h1 className="text-4xl font-sans capitalize text-center ">
                    {type =="sign-in" ? "Welcome back":"Join us today"}
                </h1>
                
                {
                    // input box นี้มันจะสะแดงในเมื่อ type == signup เท่านั้น
                    type != "sign-in" ?
                    <InputBox
                        name="fullname"
                            type="text"
                            icon="fi-rr-user"
                            placeholder="Full Name"
                    />
                        :""
                }
                      <InputBox
                        name="email"
                            type="email"
                            icon="fi-rr-envelope"
                            placeholder="Email"
                    />

                    <InputBox
                        name="password"
                            type="password"
                            icon="fi-rr-key"
                            placeholder="Password"
                    />
                        <button className="btn-dark center mt-14" type="submit">
                        {type.replace("-","")}   {/*delet - */}
                        </button>
                     

                        <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase
                            text-black font-bold ">
                                <hr className=" w-1/2 border-black" />
                                <p>OR</p>
                                <hr className=" w-1/2 border-black" />

                    </div>
                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center ">
                        <img src={googleIcon}  className=" w-5"/>
                        continue with google
                    </button>

                    {
                        // นี้มันจะสะแดงในเมื่อ type == sign-in เท่านั้น
                        type =="sign-in" ?

                        <p className=" mt-6 text-dark-grey text-xl text-center "> 
                            Don't have account ?
                            <Link to="/signup" className=" underline text-black text-xl ml-1">
                            Join us today 
                            </Link>
                        </p>
                        :
                        <p className=" mt-6 text-dark-grey text-xl text-center"> 
                            Already a member ?
                            <Link to="/signin" className=" underline text-black text-xl ml-1">
                            Sign in here.
                            </Link>
                        </p>
                    }
                  
                </form>
             </section> 

       </AnimationWrapper>
           


      
    )
}
export default UserAuthForm;