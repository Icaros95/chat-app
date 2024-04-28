import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-filter backdrop-blur-lg bg-opacity-0">
              <h1 className="text-3xl font-semibold text-center text-gray-300">
                  Sign Up
                  <span className="text-red-400"> ChatApp</span>
              </h1>

              <form>
                  <div>
                      <label className="label p-2">
                          <span className="text-base label-text">Full Name</span>
                      </label>
                      <input type="text" placeholder="Someya Hiromu" className="w-full input input-bordered h-10" />
                  </div>
                  <div>
                      <label className="label p-2">
                          <span className="text-base label-text">Username</span>
                      </label>
                      <input type="text" placeholder="hiro.dev" className="w-full input input-bordered h-10" />
                  </div>
                  <div>
                      <label className="label p-2">
                          <span className="text-base label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                  </div>
                  <div>
                      <label className="label p-2">
                          <span className="text-base label-text">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
                  </div>

                <GenderCheckbox />

                  <a href="#" className="text-sm text-red-100 hover:underline hover:text-red-400 inline-block"> Already have an account?</a>

                  <div>
                      <button className="btn btn-block btn-sm mt-2">Login</button>
                  </div>
              </form>
        </div>
    </div>
  )
}

export default SignUp;