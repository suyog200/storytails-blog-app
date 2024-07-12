"use client";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeProvider({children}) {
    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(mounted) {
        return <div className={theme}>{children}</div>
    }

}