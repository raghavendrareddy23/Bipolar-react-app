import React from 'react'
import styles from './CameraHealthAlerts.module.css'
function CameraHealthAlerts() {
  return (
    <div className={styles.pages}>
        <div className={styles.cameraHealthAndAlertParent}>
                <div className={styles.cameraHealthAnd}>
                  Camera Health and Alert
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.offlineAlert}>Offline Alert</div>
                        <div className={styles.ifCameraIs}>
                          If camera is continuously offline for
                        </div>
                        <div className={styles.minutes}>12 minutes</div>
                        <div className={styles.sendAnEmailToParent}>
                          <div className={styles.sendAnEmail}>
                            Send an email to
                          </div>
                          <div className={styles.emailcom}>email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.pm}>Health Grade</div>
                        <div className={styles.div}>96%</div>
                        <div className={styles.cheersThisCameraHadNoOffParent}>
                          <div className={styles.cheersThisCamera}>
                            Cheers, this camera had no offline time in the last
                            30 days
                          </div>
                          <div className={styles.gradeA}>Grade A</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.pm}>Health Logs</div>
                        <div className={styles.today0437PmActivatedParent}>
                          <div className={styles.sendAnEmail}>
                            Today, 04:37 pm: Activated
                          </div>
                          <div className={styles.sendAnEmail}>
                            23 Aug, 02:22 pm: Deactivated
                          </div>
                          <div className={styles.sendAnEmail}>
                            21 Aug, 05:12 am: Activated
                          </div>
                          <div className={styles.sendAnEmail}>
                            20 Aug, 02:12 am: Deactivated
                          </div>
                          <div className={styles.sendAnEmail}>
                            19 Aug, 02:12 am: Deactivated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default CameraHealthAlerts