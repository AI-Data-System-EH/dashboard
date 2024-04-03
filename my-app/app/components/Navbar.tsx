import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useReducer, useRef, useState } from 'react';
import { NavItems, SingleNavItem } from './types';

type NavbarProps = {items: NavItems };

export default function Navbar( items ): NavbarProps {
    const router = useRouter();
    const lastRoute = useRef('');

    return (
        
    );
}