import React from "react";
import Header from "../Header/Header";
import CameraDetails from "../CameraDetails/CameraDetails";
import CameraHealthAlerts from "../CameraHealthAlerts/CameraHealthAlerts";
import RecentRecordings from "../RecentRecordings/RecentRecordings";

function Pages() {
  return (
    <div>
      <Header />
      <CameraDetails />
      <CameraHealthAlerts />
      <RecentRecordings />
    </div>
  );
}

export default Pages;
