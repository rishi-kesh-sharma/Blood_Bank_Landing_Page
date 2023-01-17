import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const style = {
  position: "absolute",
  borderRadius: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  minWidth: "400px",
  maxWidth: "600px",
  height: "50vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({
  open,
  setOpen,
  children,
  currentModalId,
  cardsData,
}) {
  const [currentBank, setCurrentBank] = React.useState({});
  React.useEffect(() => {
    const bank = cardsData.banks.find((bank) => bank._id == currentModalId);
    setCurrentBank(bank);
  }, [currentModalId]);
  const handleOpen = () => setOpen(true);
  //   const open = true;
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {
            <div className="flex flex-col gap-[0.5rem]">
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">
                  Bankname:
                </span>
                <span>{currentBank?.bankname}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">
                  Address:
                </span>
                <span>{currentBank?.address}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">Email:</span>
                <span>{currentBank?.email}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">
                  Contact:
                </span>
                <span>{currentBank?.contact}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">Estd:</span>
                <span>{currentBank?.estd}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">
                  Category:
                </span>
                <span>{currentBank?.category}</span>
              </div>
              <div>
                <span className="mr-[1rem] w-[5rem] inline-block">
                  Visit Site:
                </span>
                <a className="text-red-500" href={currentBank?.website}>
                  {currentBank?.website}
                </a>
              </div>
              <div className="text-xs text-gray-900 mt-[1rem]  md:text-sm lg:text-xl flex items-center gap-[0.5rem]">
                <a
                  className="text-red-500"
                  href={currentBank?.socialMediaHandles?.facebook}
                >
                  <BsFacebook />
                </a>
                <a
                  className="text-red-500"
                  href={currentBank?.socialMediaHandles?.instagram}
                >
                  <BsInstagram />
                </a>
                <a
                  className="text-red-500"
                  href={currentBank?.socialMediaHandles?.twitter}
                >
                  <BsTwitter />
                </a>
                <a
                  className="text-red-500"
                  href={currentBank?.socialMediaHandles?.linkedin}
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          }
        </Box>
      </Modal>
    </div>
  );
}
