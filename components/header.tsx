import type { NextPage } from "next";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

const Header: NextPage = () => {
    return (
        <header className="flex items-center flex-col sm:flex-row m-5 justify-betwee">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>

            <div>
                <Image
                    src={"https://links.papareact.com/ua6"}
                    width={200}
                    height={100}
                    className="object-contain"
                />
            </div>
        </header>
    );
};

export default Header;