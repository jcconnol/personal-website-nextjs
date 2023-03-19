import React, { useEffect, useState } from "react"
import styles from "../styles/fish-camera.module.css"

export default function FishCamera() {
    const [tankTemp, setTankTemp] = useState(-1)
    const [imageUrl, setImageUrl] = useState("")
    
    useEffect(() => {
        setTimeout(() => {
          console.log("whatever");
          fetch("https://dkwxarv83g.execute-api.us-east-2.amazonaws.com/dev/api/fish-cam", { method: 'post'})
            .then(res => res.json())
            .then(
                (result) => {
                    setTankTemp(result.temp_f);
                    setImageUrl(result.s3_url);
                },
                (error) => {
                    setTankTemp(-1);
                    setImageUrl("");
                }
            )
        }, 2000);
    }, []);

    return (
        <div className={styles["center"]}>
            <div>
                Tank Temp: {tankTemp}
            </div>
            {
                imageUrl ?
                <img src={imageUrl} />
                :
                "No image found!"
            }
            
            
        </div>
    )
}