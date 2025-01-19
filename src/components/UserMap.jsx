import { useState } from "react";
import { getMapUrl } from "../utils/getMapUrl";
import Modal from "./Modal";
import Loader from "./Loader";

function UserMap({ map, isOpen, onClose }) {
  const [loader, setLoader] = useState(true);

  const url = getMapUrl(map);

  return (
    map && (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="w-[90vw] h-[90vh] lg:w-[60rem] lg:h-[40rem] p-2 m-auto md:m-2 grid place-items-center">
          {loader ? <Loader /> : null}
          <embed
            width="100%"
            height="100%"
            src={url}
            onLoad={() => {
              setLoader(false);
            }}
          />
        </div>
      </Modal>
    )
  );
}
export default UserMap;
