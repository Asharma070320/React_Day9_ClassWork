import React, { useEffect,useState } from "react";
import "./Image.css";
import Api from "./Api";
import axios from "axios"

const Image = () => {

    let[store,setStore] = useState([]);

    useEffect( ()=>{
        const response = async () =>{
            let data = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
            {
                params:{
                    limit:10
                },
                headers:{
                    'X-RapidAPI-Key': 'be327012acmsh948ab469a9cd410p161e68jsnb4c5c21b4885',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                },
            })
            // console.log(data.data);
            setStore(data.data)
        }
        response()
    },[])

    console.log(store);
  return (
    <div className="ImageConatiner">
      <div className="uperImages">
        <div className="image1">
          <img
            className="fit"
            src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
            alt=""
          />
        </div>
        <div className="image2">
          <img
            className="fit2"
            src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
            alt=""
          />
        </div>
        <div className="image3">
          <img
            className="fit3"
            src="https://wallpaperaccess.com/full/1087621.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lowerImages">
        <div className="image4">
            <img className="fit4" src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt="" />
        </div>
        <div className="image5">
            <img className="fit5" src="https://wallpapercave.com/wp/wp6331008.jpg" alt="" />
        </div>
        <div className="image6">
            <img className="fit6" src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg" alt="" />
        </div>
      </div>
      <div className="search">
        <h1>Exercise List</h1>
        <input className="searchInp" type="text" placeholder="Search by target, body part,or exercise" />
      </div>

        <div className="apiContainer">
       {
        store.map((list)=>{
            return <Api  {...list} />
        })
       }
        </div>
      
    </div>
  );
};

export default Image;
