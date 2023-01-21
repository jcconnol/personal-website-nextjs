import * as React from "react"
import styles from "../styles/3d-object.module.css"
import { Unity, useUnityContext } from "react-unity-webgl";
// import BuildLoader from "../public/unity-build/build.loader"
// import Webgl from "../public/unity-build/webgl.data"
// import Framework from "../public/unity-build/build.framework"
// import Wasm from "../public/unity-build/build.wasm"

const ThreeDUnityObject = (props) => {
    // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    //     loaderUrl: BuildLoader,
    //     dataUrl: Webgl,
    //     frameworkUrl: Framework,
    //     codeUrl: Wasm,
    // });
    
    return (
        <div className={styles["game-container"]} >
            {/* <Unity
                unityProvider={unityProvider}
                style={{ width: "90%", height: "100%" }}
            /> */}
        </div>
    );
}

export default ThreeDUnityObject;