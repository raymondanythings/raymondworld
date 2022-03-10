import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { webState } from "../../datas";
import WebDetail from "./WebDetail";
import WebVideo from "./WebVideo";

const Web = () => {
  const [selected, setSelected] = useState("");
  // const { scrollY, scrollYProgress } = useViewportScroll();
  const webVideos = useRecoilValue(webState);
  const selectedData = webVideos.find((m) => m.title === selected);

  return (
    <>
      {webVideos.map((data) => (
        <WebVideo data={data} setSelected={setSelected} key={data.id} />
      ))}
      <AnimatePresence>
        {selected && selectedData && (
          <WebDetail
            selected={selected}
            setSelected={setSelected}
            selectedData={selectedData}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Web;
