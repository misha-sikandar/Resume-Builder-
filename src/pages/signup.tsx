import { FaGoogle } from "react-icons/fa";
export default function Signup(){
    return(
        <div className="min-h-screen bg-backgroung-to-b from-gray-100 to-gray-200 flex item-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Please sign in to continue</p>
                </div>
                {/* Google Sign In Button */}
          <button 
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 mb-6"
          >
           
           <FaGoogle /> Sign in with Google
          </button>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <form className="space-y-6">
            
          </form>



            </div>



        </div>
    )
}