import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'About Us',
		path: '/aboutus',
		icon: <RiIcons.RiAccountPinCircleFill />,
		cName: 'nav-text'
	},
	{
		title: 'Products',
		path: '/products',
		icon: <FaIcons.FaCartPlus />,
		cName: 'nav-text'
	},
	{
		title: 'Reports',
		path: '/reports',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Contact Us',
		path: '/contactus',
		icon: <IoIcons.IoIosContact />,
		cName: 'nav-text'
	}
]