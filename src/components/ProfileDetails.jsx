import React from "react";
import UserMap from "./UserMap";
import Modal from "./Modal";
import { getMapUrl } from "../utils/getMapUrl";
import { data } from "autoprefixer";

function ProfileDetails ({data,isOpen,onClose})
 {
    const {name,
        email,
        mobile,
        address,
        profilePicture} = data
    const url = getMapUrl(address);
    const Heading = ({children}) => {
        return (
            <p className="text-sm md:text-xl text-emerald-500">{children}</p>
        )
    }
    const Content = ({styles, children}) => {
        return (
            <p className="text-sm md:text-lg text-zinc-500 pb-6 capitalize font-semibold" style={styles}>{children}</p>
        )
    }
    const ProfileSection = () => {
        return(
            <>
                <img src={profilePicture} alt="Profile Picture" className="w-[150px] h-[150px] md:w-[15rem] md:h-[15rem] self-center rounded-full object-cover border-[3px] border-zinc-300 p-2" />
                <div className="border-l-[3px] border-dashed border-l-emerald-100 pl-4">
                    <Heading>Name</Heading>
                    <Content>{name}</Content>
                    <Heading>Mobile number</Heading>
                    <Content>{mobile}</Content>
                    <Heading>Email Address</Heading>
                    <Content styles={{textTransform: 'lowercase'}}>{email}</Content>
                    <Heading>Address</Heading>
                    <Content>{address}</Content>
                </div>
            </>
        )
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" w-[90vw] h-[90vh] lg:w-[60rem] lg:h-[40rem]">
        <div className="w-full h-1/2 flex gap-2 md:gap-10 ">
        <ProfileSection />
        </div>
        <div className="w-full h-1/2 my-2"><embed width="100%" height="100%" src={url}  /></div>
      </div>
    </Modal>
  );
}

export default ProfileDetails;
