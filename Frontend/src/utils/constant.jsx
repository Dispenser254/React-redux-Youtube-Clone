// import React from 'react'
import { FaCode, FaHome, FaSchool } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import {
  MdGraphicEq,
  MdDeveloperMode,
  MdTheaterComedy,
  MdLiveTv,
  MdFaceRetouchingNatural,
  MdCheckroom,
  MdFitnessCenter,
  MdOutlineSportsBasketball,
  MdOndemandVideo,
} from "react-icons/md";


export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "New", icon: <FaHome /> },
  { name: "JS Mastery", icon: <FaCode /> },
  { name: "Coding", icon: <FaCode /> },
  { name: "React JS", icon: <FaCode /> },
  { name: "Next JS", icon: <FaCode /> },
  { name: "Music", icon: <IoMdMusicalNotes /> },
  { name: "Education", icon: <FaSchool /> },
  { name: "Podcast", icon: <MdGraphicEq /> },
  { name: "Movie", icon: <MdOndemandVideo /> },
  { name: "Gaming", icon: <MdOutlineSportsBasketball /> },
  { name: "Live", icon: <MdLiveTv /> },
  { name: "Sport", icon: <MdFitnessCenter /> },
  { name: "Fashion", icon: <MdCheckroom /> },
  { name: "Beauty", icon: <MdFaceRetouchingNatural /> },
  { name: "Comedy", icon: <MdTheaterComedy /> },
  { name: "Gym", icon: <MdFitnessCenter /> },
  { name: "Crypto", icon: <MdDeveloperMode /> },
];
