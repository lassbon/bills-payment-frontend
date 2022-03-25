import PrimaryFormField from "../../../shared-components/Form/PrimaryFormField"
import PrimarySolidButton from "../../../shared-components/Button/PrimarySolidButton"


const ForgetPassword = ()=> {

    return (
        <div className="flex flex-col items-center mt-48 border-1 w-1/2 rounded bg-slate-200 mx-auto">
            <h1 className="text-3xl text-blue-800 mt-4">Reset Password</h1>
            <form className="mt-4 space-y-6 mb-12">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="forget-password" className="sr-only">Forget Password</label>
                        <PrimaryFormField type="password" placeholder="New Password here"  />
                    </div><br />
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <PrimaryFormField type="password" placeholder="Confirm Password" />
                    </div> <br />
                    <div className="mt-16">
                        <PrimarySolidButton text="Reset Password" type="button"  />
                        
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ForgetPassword