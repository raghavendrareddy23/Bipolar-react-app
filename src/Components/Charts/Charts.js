import { Grid, Typography, Select, MenuItem } from "@mui/material";
import React from "react";
import styles from "./Charts.module.css"; 
import img1 from '../../Assets/gameiconscctvcamera.svg'
import img2 from '../../Assets/typcninfo.svg';
import img3 from '../../Assets/phinfofill.svg'
import CircularChart from './CircularChart'

const Charts = () => {
  return (
    <Grid container justifyContent="center" className={styles.charts}>
      <div className={styles.healthGraph}>
        <div className={styles.frameParent}>
          <div className={styles.overallCameraHealthParent}>
            <div className={styles.overallCameraHealth1}>Camera Health</div>
          </div>
          <div className={styles.groupParent}>
            {/* <div className={styles.ellipseParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.groupChild1} />
              <div className={styles.parent}>
                <b className={styles.b}>124</b>
                <div className={styles.cameras}>Cameras</div>
              </div>
            </div> */}
            <CircularChart/>
            <div className={styles.frameGroup}>
              <div className={styles.infoParent}>
                <div className={styles.info}>
                  <img
                    className={styles.iconParkdown2}
                    alt=""
                    src={img1}
                  />
                  <div className={styles.totally124CamerasContainer}>
                    <span className={styles.totally}>{`Totally `}</span>
                    <b className={styles.b1}>124</b>
                    <span className={styles.totally}>
                      {" "}
                      Cameras are in 9 NVRs and installed in 12 Locations
                    </span>
                  </div>
                </div>
                <div className={styles.info1}>
                  <div className={styles.typcninfoParent}>
                    <img
                      className={styles.iconParkdown2}
                      alt=""
                      src={img2}
                    />
                    <div className={styles.totally124CamerasContainer}>
                      <b>6</b>
                      <span className={styles.camerasWereExperiencing1}>
                        {" "}
                        Cameras were experiencing downtime in Last 30 days
                      </span>
                    </div>
                  </div>
                  <div className={styles.status}>
                    <div className={styles.viewCameras}>View Cameras</div>
                  </div>
                </div>
              </div>
              <div className={styles.legends}>
                <div className={styles.legendSquareParent}>
                  <div className={styles.legendSquare8} />
                  <div className={styles.div}>Super Healthy (56)</div>
                  <img
                    className={styles.phinfoFillIcon4}
                    alt=""
                    src={img3}
                  />
                </div>
                <div className={styles.legendSquareParent}>
                  <div className={styles.legendSquare9} />
                  <div className={styles.div}>Healthy (35)</div>
                  <img
                    className={styles.phinfoFillIcon4}
                    alt=""
                    src={img3}
                  />
                </div>
                <div className={styles.legendSquareParent}>
                  <div className={styles.legendSquare10} />
                  <div className={styles.div}>Warning (27)</div>
                  <img
                    className={styles.phinfoFillIcon4}
                    alt=""
                    src={img3}
                  />
                </div>
                <div className={styles.legendSquareParent}>
                  <div className={styles.legendSquare11} />
                  <div className={styles.div}>Danger (6)</div>
                  <img
                    className={styles.phinfoFillIcon4}
                    alt=""
                    src={img3}
                  />
                </div>
                <div className={styles.group}>
                  <div className={styles.div}>9</div>
                  <div className={styles.legendSquare12} />
                </div>
                <div className={styles.group}>
                  <div className={styles.div}>10</div>
                  <div className={styles.legendSquare13} />
                </div>
                <div className={styles.group}>
                  <div className={styles.div}>11</div>
                  <div className={styles.legendSquare14} />
                </div>
                <div className={styles.group}>
                  <div className={styles.div}>9</div>
                  <div className={styles.legendSquare15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Charts;
