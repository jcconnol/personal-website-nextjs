import Model from "./model";
import styles from "../styles/3d-model-card.module.css"
import React from "react";

export default function ThreeDModelCard({fileUrl, colorHex, cameraPosition, description, priceNumber}) {
    //TODO put different color options
    var formattedPrice = (Math.round(priceNumber * 100) / 100).toFixed(2);

    return (
        <div className={styles["print-model-card"]}>
            <div className={styles["print-model"]}>
                <Model fileUrl={fileUrl} colorHex={colorHex} cameraPosition={cameraPosition} />
            </div>
            <div className={styles["description"]}>
                {description}
            </div>
            <div className={styles["price"]}>
                ${formattedPrice}
            </div>
        </div>
    );
}