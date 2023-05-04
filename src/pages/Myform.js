
import { useSelector } from "react-redux";

function MyForm() {
    const userInfo = useSelector((state) => state.bazar.userInfo);

    return (
        <>
            <form className="mt-6">
                <div class="h-full">
                    <div class="border-b-2 block md:flex">
                        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold block">Profile</span>
                                <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
                            </div>

                            <span class="text-gray-600">This information is secret so be careful</span>
                            <div class="w-full p-8 mx-2 flex justify-center">
                                <img id="showImage" class="max-w-xs w-32 items-center border" src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="" />
                            </div>
                        </div>

                        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                            <div class="rounded  shadow p-6">
                                <div class="pb-6">
                                    <label for="name" class="font-semibold text-gray-700 block pb-1">User Name</label>
                                    <div class="flex">
                                        {userInfo && (
                                            <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value={userInfo.username} />
                                        )}
                                    </div>
                                </div>
                                <div class="pb-4">
                                    <label for="about" class="font-semibold text-gray-700 block pb-1">Password</label>
                                    {userInfo && (
                                        <input disabled id="password" class="border-1  rounded-r px-4 py-2 w-full" type="email" value={userInfo.password} />
                                    )}
                                    <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
};
export default MyForm