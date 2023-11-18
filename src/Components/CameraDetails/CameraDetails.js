// import React from 'react'
// import styles from './CameraDetails.module.css'

// function CameraDetails() {
//   return (
//     <div className={styles.pages}>
//       <div className={styles.cameraDetails}>
//         <div className={styles.cameraDetailsInner}>
//           <div className={styles.frameWrapper}>
//             <div className={styles.frameContainer}>
//               <div className={styles.frameDiv}>
//                 <div className={styles.bxvideoRecordingParent}>
//                   <img
//                     className={styles.bxvideoRecordingIcon}
//                     alt=""
//                     src="/bxvideorecording.svg"
//                   />
//                   <div className={styles.viewRecordedVideos}>
//                     View Recorded Videos
//                   </div>
//                 </div>
//                 <div className={styles.bxvideoRecordingParent}>
//                   <img
//                     className={styles.bxvideoRecordingIcon}
//                     alt=""
//                     src="/uimrefresh.svg"
//                   />
//                   <div className={styles.viewRecordedVideos}>
//                     Refetch Camera
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.groupContainer}>
//                 <div className={styles.rectangleContainer}>
//                   <img
//                     className={styles.groupInner}
//                     alt=""
//                     src="/rectangle-31@2x.png"
//                   />
//                   <div className={styles.pmParent}>
//                     <div className={styles.pm}>01/05/2023 02:42:21 PM</div>
//                     <div className={styles.pm}>Hall 01</div>
//                   </div>
//                 </div>
//                 <div className={styles.frameWrapper1}>
//                   <div className={styles.frameParent1}>
//                     <div className={styles.cameraDetailsParent}>
//                       <div className={styles.cameraDetails2}>
//                         Camera Details
//                       </div>
//                       <div className={styles.activeWrapper}>
//                         <div className={styles.active}>Active</div>
//                       </div>
//                     </div>
//                     <div className={styles.offlineAlertParent}>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>Location:</div>
//                         <div className={styles.coimbatore}>Coimbatore</div>
//                       </div>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>City:</div>
//                         <div className={styles.delhiIndia}>Coimbatore</div>
//                       </div>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>Timezone:</div>
//                         <div className={styles.delhiIndia}>Delhi-India</div>
//                       </div>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>Date added:</div>
//                         <div className={styles.delhiIndia}>
//                           Aug 03, 2023 12:01:42 PM
//                         </div>
//                       </div>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>Last update:</div>
//                         <div className={styles.delhiIndia}>
//                           Aug 03, 2023 12:01:42 PM
//                         </div>
//                       </div>
//                     </div>
//                     <div className={styles.offlineAlertParent}>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>Manufacture details:</div>
//                         <div className={styles.coimbatore}>ADT</div>
//                       </div>
//                       <div className={styles.locationParent}>
//                         <div className={styles.pm}>RTSP/HLS URL:</div>
//                         <div className={styles.copyUrl}>Copy URL</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CameraDetails

import React from "react";
import { Grid } from "@mui/material";
import bxvideorecording from "../../Assets/bxvideorecording.svg";
import uimrefresh from "../../Assets/uimrefresh.svg";
import rectangle from "../../Assets/rectangle-31@2x.png";
import styles from "./CameraDetails.module.css"; // Import your external CSS file

function CameraDetails() {
  return (
    <div className={styles.pages}>
      <Grid container className={styles.cameraDetails}>
        <div className={styles.cameraDetailsInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.bxvideoRecordingParent}>
                  <img
                    className={styles.bxvideoRecordingIcon}
                    alt=""
                    src={bxvideorecording}
                  />
                  <div className={styles.viewRecordedVideos}>View Recorded Videos</div>
                </div>
                <div className={styles.bxvideoRecordingParent}>
                  <img
                    className={styles.bxvideoRecordingIcon}
                    alt=""
                    src={uimrefresh}
                  />
                  <div className={styles.viewRecordedVideos}>Refetch Camera</div>
                </div>
              </div>
              <div className={styles.groupContainer}>
                <div className={styles.rectangleContainer}>
                  <img className={styles.groupInner} alt="" src={rectangle} />
                  <div className={styles.pmParent}>
                    <div className={styles.pm}>01/05/2023 02:42:21 PM</div>
                    <div className={styles.pm}>Hall 01</div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.cameraDetailsParent}>
                      <div className={styles.cameraDetails2}>
                        Camera Details
                      </div>
                      <div className={styles.activeWrapper}>
                        <div className={styles.active}>Active</div>
                      </div>
                    </div>
                    <div className={styles.offlineAlertParent}>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>Location:</div>
                        <div className={styles.coimbatore}>Coimbatore</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>City:</div>
                        <div className={styles.delhiIndia}>Coimbatore</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>Timezone:</div>
                        <div className={styles.delhiIndia}>Delhi-India</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>Date added:</div>
                        <div className={styles.delhiIndia}>
                          Aug 03, 2023 12:01:42 PM
                        </div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>Last update:</div>
                        <div className={styles.delhiIndia}>
                          Aug 03, 2023 12:01:42 PM
                        </div>
                      </div>
                    </div>
                    <div className={styles.offlineAlertParent}>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>Manufacture details:</div>
                        <div className={styles.coimbatore}>ADT</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.pm}>RTSP/HLS URL:</div>
                        <div className={styles.copyUrl}>Copy URL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default CameraDetails;
