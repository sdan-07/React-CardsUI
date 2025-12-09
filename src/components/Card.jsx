import {Bookmark} from 'lucide-react'
import {BookmarkCheck} from 'lucide-react'


const Card = (props) => {
  // let oldSave = <button className='old-btn flex gap-2 '>Save <Bookmark /></button>
  // let newSave = <button className='new-btn flex gap-2 bg-gray-300'>Saved <BookmarkCheck /></button>
  
  // const [save_Btn, setSave_Btn] = useState(oldSave)

  // const handleClick = () => {
  //   setSave_Btn(prev => prev === oldSave ? newSave : oldSave)
  // }

  return (
    <> 
        <div className="card border-none shadow-xl bg-[#f5f5f7]  shadow-slate-500 text-black h-110 w-100 rounded-4xl flex flex-col justify-between">
        
          <div className="parent-topcenter">

            <div className="top flex justify-between">
              <div className="logo h-18 w-18 rounded-[50%] object-cover border-2">
                <img className='object-center w-full h-full object-contain' src={props.logo} alt="" srcset="" />
              </div>
              
              <div className="bkmk">
                <button className='old-btn flex gap-2 cursor-pointer'>Save <Bookmark /></button>
              </div>
            </div>

            <div className="center ">
              <h2 className="companyname text-xl font-semibold">{props.company}</h2>
              <h1 className="role text-2xl font-semibold">{props.role}</h1>

              <div className="type-parent flex gap-3">
                <div className="type bg-gray-200 font-bold rounded-md w-30 text-center"> {props.type1} </div>
                <div className="type bg-gray-200 font-bold rounded-md w-42 text-center">  {props.type2}  </div>
              </div>
              
            </div>
          </div>
          
            <hr className='border border-gray-300' />

            <div className="bottom flex justify-between">
              <div className="sub-bottom">
                <div className="sal text-[22px] font-semibold">{props.salary}</div>
                <div className="location text-sm text-slate-500"> {props.loc} </div>
              </div>
              <button className='apply-btn bg-black text-white cursor-pointer text-md w-32 rounded-lg font-medium'>Apply now</button>
            </div>

        
        </div>


    </>
  )
}

export default Card