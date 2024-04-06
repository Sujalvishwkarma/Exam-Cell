import React ,{useState} from "react";

function Profile()
{
    const [Name , SetName] = useState('Jiyanshu Sharma')
    const [DOB , SetDOB] = useState('')
    const [Email , SetEmail] = useState('Jiyanshu@gmail.com')
    const [Phone , SetPhone] = useState('1234567890')

    const profilesubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await fetch('',{
                method : 'POST',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name : Name ,
                    dob : DOB ,
                    email : Email ,
                    phone : Phone ,
                })
            })
            let resultJSON = await res.json();
            if(resultJSON.status_code === 200)
            {

            }
        }
        catch (err) {
            console.log('Error');
        }
    }

    return (
        <>
        <div className="p-10 max-md:p-2">
            <div className="h-44 border border-gray-400 bg-[url('https://www.gla.ac.in/images/university-sketch.webp')] bg-cover rounded-lg relative">
                <div className="absolute -bottom-1/3 left-10 flex items-center gap-10 max-md:block">
                    <img className="w-36 h-36 rounded-full border shadow-lg border-gray-400" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif" alt="" />
                    <div className="border border-gray-400 bg-white p-3 rounded-xl flex gap-5 items-center">
                  <div className="">
                     <h2 className="text-2xl"> UserName</h2>
                     <p className="text-xs">Role : Admin</p>
                   </div>
                        <div className="flex flex-col items-center border">
                           <h1 className="px-2 text-white bg-blue-900"> Exam Room </h1>
                           <h3>0001</h3>
                            </div>
                        </div>
                </div>
            </div>
            <div className="py-16 px-5 max-md:p-1">
                <form onSubmit={profilesubmit} className="grid grid-cols-2 max-md:grid-cols-1 gap-3 p-5 max-md:p-1">
                    <div className="border flex flex-col p-2">
                        <label htmlFor="" className="text-sm">Full Name</label>
                        <input type="text" value={Name} onChange={(e)=>{SetName(e.target.value)}} className="border py-2 px-5" />
                    </div>
                    <div className="border flex p-2 gap-2">
                        <div className="flex flex-col w-2/3 ">
                        <label htmlFor="" className="text-sm">Date of Birth</label>
                        <input type="date" value={DOB} onChange={(e)=>{SetDOB(e.target.value)}} className="border py-2 px-5" />
                        </div>
                        <div className="border p-2 w-1/3 flex flex-col">
                            <span className="text-xs">Age :</span>
                            <h2 className="text-center text-xl font-bold">18 <span className="text-xs font-normal">Year's</span></h2>
                        </div>
                    </div>
                    <div className="border flex flex-col p-2">
                        <label htmlFor="" className="text-sm">Email</label>
                        <input type="email" value={Email} onChange={(e)=>{SetEmail(e.target.value)}} className="border py-2 px-5" />
                    </div>
                    <div className="border flex flex-col p-2">
                        <label htmlFor="" className="text-sm">Phone</label>
                        <input type="tel" value={Phone} onChange={(e)=>{SetPhone(e.target.value)}} className="border py-2 px-5" />
                    </div>
                    <div className=""></div>
                    <button type="submit" className="p-2 bg-blue-900 border text-white">Save</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Profile