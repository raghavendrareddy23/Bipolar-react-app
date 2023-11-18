import React from "react";
// import { makeStyles } from '@mui/styles';
import styles from "./Cards.module.css";
import img1 from '../../Assets/fluentclipboardtaskadd24regular.svg'
import img2 from '../../Assets/carbontasktools.svg'
import img3 from '../../Assets/fluentclipboarderror16regular.svg'
import img4 from '../../Assets/tdesignlocation.svg'
import img5 from '../../Assets/materialsymbolsdeleteoutline.svg'
import img6 from '../../Assets/bxvideorecording.svg'
import img7 from '../../Assets/mdigraphbox.svg'
import img8 from '../../Assets/fluentclipboarderror16regular.svg'
import img9 from '../../Assets/rectangle-31@2x.png'
const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.recipeCard}>
        <div className={styles.cardselevationwhiteflat}>
          <div className={styles.cardselevationflat} />
        </div>
        <img
          className={styles.fluentclipboardTaskAdd24RIcon}
          alt=""
          src={img1}
        />
        <div className={styles.recipeManagement}>Recipe Management</div>
        <div className={styles.manage}>Manage</div>
      </div>
      <div className={styles.cameraCard}>
        <div className={styles.manage1}>Manage</div>
        <div className={styles.cameraCard1}>
          <div className={styles.bankEntranceFrontViewCamerParent}>
            <div className={styles.bankEntranceFrontViewCamer}>
              Bank Entrance-front-view Camera1
            </div>
            <div className={styles.frameParent}>
              <div className={styles.carbontaskToolsParent}>
                <img
                  className={styles.carbontaskToolsIcon}
                  alt=""
                  src={img2}
                />
                <div className={styles.recipesAdded}>3 Recipes Added</div>
              </div>
              <div className={styles.carbontaskToolsParent}>
                <img
                  className={styles.carbontaskToolsIcon}
                  alt=""
                  src={img3}
                />
                <div className={styles.today0445pmUnidentified}>
                  today, 04:45pm: Unidentified face detected
                </div>
              </div>
              <div className={styles.carbontaskToolsParent}>
                <img
                  className={styles.carbontaskToolsIcon}
                  alt=""
                  src={img4}
                />
                <div className={styles.today0445pmUnidentified}>
                  Coimbatore branch
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.activeWrapper}>
                <div className={styles.active}>Active</div>
              </div>
              <div className={styles.materialSymbolsdeleteOutlinParent}>
                <img
                  className={styles.materialSymbolsdeleteOutlinIcon}
                  alt=""
                  src={img5}
                />
                <img
                  className={styles.materialSymbolsdeleteOutlinIcon}
                  alt=""
                  src={img6}
                />
                <img
                  className={styles.materialSymbolsdeleteOutlinIcon}
                  alt=""
                  src={img7}
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.groupChild}
              alt=""
              src={img9}
            />
            <div className={styles.detect}>
              <div className={styles.praveenKumarWrapper}>
                <b className={styles.today0445pmUnidentified}>Praveen Kumar</b>
              </div>
              <div className={styles.managerWrapper}>
                <b className={styles.today0445pmUnidentified}>Manager</b>
              </div>
              <div className={styles.inTime24221PmWrapper}>
                <b className={styles.today0445pmUnidentified}>
                  In Time: 2:42:21 PM
                </b>
              </div>
            </div>
          </div>
          <div className={styles.cameraCardInner}>
            <div className={styles.fluentclipboardError16ReguGroup}>
              <img
                className={styles.carbontaskToolsIcon}
                alt=""
                src={img8}
              />
              <div className={styles.today0445pmUnidentifiedFParent}>
                <div className={styles.recipesAdded}>
                  Today, 04:45pm: Unidentified face detected
                </div>
                <div className={styles.today0322pmUser}>
                  Today, 03:22pm: User Clocked-In
                </div>
                <div className={styles.today0322pmUser}>
                  Today, 03:12pm: Unidentified face detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
