import React from "react";
import { appVideos } from "../../datas";
import ApplicationDetail from "./ApplicationDetail";

const Application = () => {
  return (
    <>
      {appVideos.map((data) => (
        <ApplicationDetail key={data.id} data={data} />
      ))}
    </>
  );
};

export default Application;
