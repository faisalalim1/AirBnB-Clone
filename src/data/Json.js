import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/59af5e61-037e-440c-92b5-429edc8baafe.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/ca080024-4408-4808-aecc-83e411bc7ff9.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/5fae54d7-9455-4c79-b077-02222ed699dd.jpeg?im_w=720',
      },
    ],
    location: 'Pimplad Nasik, India',
    days: '19-26 Oct',
    price: 'RS-2,999  night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/f9d70f6c-6748-426f-b78c-f89a910f3581.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/2fff0a20-0682-4546-a7af-c0745d82a7bc.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/1e97113c-706c-4b1b-ad40-dfbc70a56e09.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/715dca66-4d47-4911-9c0e-cebddda53241.jpg?im_w=720',
      },
    ],
    location: 'Gurugram, India',
    days: '30 Oct-4Nov',
    price: 'Rs-5000 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/6e455b26-2063-4c8b-896f-9dbd413cfc19.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/9bae589d-b50c-4734-9f8c-8073412b9fc7.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/4ab79069-1efb-4044-ab05-c642917b7494.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/9bae589d-b50c-4734-9f8c-8073412b9fc7.jpg?im_w=720',
      },
    ],
    location: 'Udaiput, India',
    days: '20-25 Oct',
    price: 'Rs- 6000 night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/b6aa83e7-e9be-491e-890a-5fa8295f8272.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/de64663a-ab07-4f1f-9041-8c5c7138b8e0.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/a74cec4b-3b5e-4891-a588-d2d31e041c40.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/633dff2e-4b37-44d9-bbc3-ff6726d3f266.jpg?im_w=720',
      },
    ],
    location: 'Noida, India',
    days: 'Oct 28-Nov 4',
    price: '$4500 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/6970b02f-24ee-4547-8840-a4e66820b38c.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/700edd5a-549b-4bc9-a7cb-880a4654cb47.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/f22c1ee3-a6e2-4abc-908d-c62482fb3110.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/5a83481f-e78d-4b59-a359-b46ac42f0fff.jpg?im_w=720',
      },
    ],
    location: 'New Delhi, India',
    days: '11-16 Nov',
    price: '$20,000 night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47977032/original/d891604f-9338-49f9-970a-f928bf92a9c1.jpeg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47977032/original/018a11e0-2fe0-4941-9bc3-a00bb3114dd0.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47977032/original/572dc765-807e-471f-8fe4-be6661963fa2.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/2ae0d78e-d42d-46b0-90e9-a10b4833fcbb.jpg?im_w=720',
      },
    ],
    location: 'Noida, India',
    days: '2-9 Nov',
    price: '$1,999 night',
    isNew: false,
    rating: 4.5,
  },
];
