import React from "react";
import Image from 'next/image';
import {Button} from "../../../components/ui/button";
import {UserButton} from "@clerk/nextjs";

function Header({ children }) {
    return (
        <div className="p-3, px-5 flex items-center justify-between shadow-md">
            <div className="flex gap-3 items-center">
                <Image src={'/logo.png'} alt="logo" width={50} height={50} />
                <h1 className="font-bolt text-xl">AI Video Generator</h1>
            </div>
            <div className="flex gap-3 items-center">
                <Button>Dashboard</Button>
                <UserButton/>
            </div>
        </div>
    );
}

export default Header;