import React, { useEffect, useState } from "react"
import styles from "../styles/fish-camera.module.css"

export default function FishCamera() {
    const [tankTemp, setTankTemp] = useState(-1)
    const [imageUrl, setImageUrl] = useState("")
    const [updateTimestamp, setUpdateTimestamp] = useState("")
    
    useEffect(() => {
        function getFishData() {
            fetch("https://dkwxarv83g.execute-api.us-east-2.amazonaws.com/dev/api/fish-cam", { method: 'post'})
            .then(res => res.json())
            .then(
                (result) => {
                    let returnedTimestamp = new Date(result.last_run_time);
                    let formattedDate = returnedTimestamp.toLocaleDateString() + ' ' + returnedTimestamp.toLocaleTimeString();
                    setUpdateTimestamp(formattedDate)
                    setTankTemp(result.temp_f);
                    setImageUrl(result.s3_url);
                },
                (error) => {
                    setUpdateTimestamp("None")
                    setTankTemp(-1);
                    setImageUrl("");
                }
            )
        }

        getFishData()

        const interval = setInterval(() => getFishData(), 2000)

        return () => {
          clearInterval(interval);
        }   
    }, []);

    return (
        <div className={styles["center"]}>
            <div>
                Tank Temp: {tankTemp}
            </div>
            <div>
                Last update: {updateTimestamp}
            </div>
            {
                imageUrl ?
                <img src={imageUrl} className={styles["fish-image"]} />
                :
                "No image found!"
            }
            
            
        </div>
    )
}