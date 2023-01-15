import * as React from "react"
import styles from "../styles/3d-object.module.css"
import { Unity, useUnityContext } from "react-unity-webgl";
import BuildLoader from "./static/unity-build/build.loader"
import Webgl from "./static/unity-build/webgl.data"
import Framework from "./static/unity-build/build.framework"
import Wasm from "./static/unity-build/build.wasm"

const ThreeDUnityObject = (props) => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: BuildLoader,
        dataUrl: Webgl,
        frameworkUrl: Framework,
        codeUrl: Wasm,
    });
    
    return (
        <div className={styles["game-container"]} >
            <Unity
                unityProvider={unityProvider}
                style={{ width: "90%", height: "100%" }}
            />
        </div>
    );
}

export default ThreeDUnityObject;