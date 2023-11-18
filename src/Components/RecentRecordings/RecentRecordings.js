import React from "react";
import styles from "./RecentRecordings.module.css";
import rec1 from '../../Assets/rectangle-311@2x.png'
import rec2 from '../../Assets/rectangle-312@2x.png'
import rec3 from '../../Assets/rectangle-313@2x.png'
import group from '../../Assets/group-32.svg'

function RecentRecordings() {
  return (
    <div className={styles.pages}>
      <div className={styles.cameraHealthAndAlertParent}>
        <div className={styles.recentRecordingsParent}>
          <div className={styles.cameraHealthAnd}>Recent Recordings</div>
          <div className={styles.viewAll}><a href="../CameraDetails/CameraDetails.js">View All</a></div>
        </div>
        <div className={styles.frameParent6}>
          <div className={styles.groupParent1}>
            <div className={styles.groupDiv}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src={rec1}
              />
              <img className={styles.groupIcon} alt="" src={group} />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
                <div className={styles.div1}>
                  <span>{`1:24 / `}</span>
                  <span className={styles.span}>53.30</span>
                </div>
              </div>
            </div>
            <div className={styles.recording0121Parent}>
              <div className={styles.pm}>Recording_0121</div>
              <div className={styles.today0442Pm}>Today, 04:42 pm</div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupDiv}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src={rec2}
              />
              <img className={styles.groupIcon} alt="" src={group} />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
                <div className={styles.div1}>
                  <span>{`1:24 / `}</span>
                  <span className={styles.span}>53.30</span>
                </div>
              </div>
            </div>
            <div className={styles.recording0121Parent}>
              <div className={styles.pm}>Recording_0121</div>
              <div className={styles.today0442Pm}>Today, 02:14 pm</div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupDiv}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src={rec3}
              />
              <img className={styles.groupIcon} alt="" src={group} />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
                <div className={styles.div1}>
                  <span>{`1:24 / `}</span>
                  <span className={styles.span}>53.30</span>
                </div>
              </div>
            </div>
            <div className={styles.recording0121Parent}>
              <div className={styles.pm}>Recording_0121</div>
              <div className={styles.today0442Pm}>Today, 02:09 pm</div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupDiv}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src={rec1}
              />
              <img className={styles.groupIcon} alt="" src={group} />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
                <div className={styles.div1}>
                  <span>{`1:24 / `}</span>
                  <span className={styles.span}>53.30</span>
                </div>
              </div>
            </div>
            <div className={styles.recording0121Parent}>
              <div className={styles.pm}>Recording_0121</div>
              <div className={styles.today0442Pm}>Today, 01:11 pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentRecordings;
