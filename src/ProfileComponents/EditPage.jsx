import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { update } from "./userSlice";

const EditPage = (props) => {
    const avaUrl = [
        "https://media.istockphoto.com/id/1445522171/vector/blue-coral-defocused-abstract-background.jpg?s=612x612&w=0&k=20&c=E_lBRwaGOZ1NthbOXycNWFf0nvk0qgB1fZN_UYzpVHs=",
        "https://t4.ftcdn.net/jpg/02/66/35/63/360_F_266356338_5sHTI2256ndaVN4Nkrd90Kx87gJ8EV3A.jpg",
        "https://t4.ftcdn.net/jpg/02/10/73/39/360_F_210733963_stIjhFeI7D6odexhOrdhvOW4GODS842r.jpg"
    ] 
    const user = useSelector((state)=>state.user)
    const [name, setName] = useState(user.name);
    const [bio,  setBio] = useState(user.Bio);
    const [url, setUrl] = useState(user.avaUrl);
    const [theme, setTheme] = useState(user.themeColor);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);

        const updatedUser = {
            name: name,
            Bio: bio,
            avaUrl: url,
            themeColor: theme 
        };
        dispatch(update(updatedUser));
    };

    const {setEdit} = props;
    const userName = useSelector((state)=>state.user.name);
    const userBio = useSelector((state)=>state.user.Bio);


    return (
    <>
    <form onSubmit={handleSubmit}>
        <section className="edit-container">
            <button className="close">Save</button>
        <div className="edit-prodile">Edit Profile</div>
        <div className="input-container">
            <Input label="Display change" data={userName} setData={setName}/>
            <Input inputType="textarea" classStyle="input-about" label="Bio" data={userBio} setData={setBio}/>
        </div>
        <label>Profile Picture</label>
        <div className="input-image-container">
            {avaUrl.map((url)=>{
            return (
                <>
                    <img src={url} className="input-image" alt="" onClick={(e)=>setUrl(e.target.src)}/>
                </>
                )
            })}
        </div>
        <div className="theme-container">
            <label>Theme</label>
            <input type="color" className="theme-color" onChange={(e)=>setTheme(e.target.value)}></input>
        </div>
        </section>
    </form>
    </>
    );
}
 
export default EditPage;