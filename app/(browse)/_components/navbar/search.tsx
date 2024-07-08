"use client";

import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {

    console.log("I am logged here");
    const router = useRouter();
    const [value, setValue] = useState("");


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) return;


        const query = qs.stringify({ term: value }, { skipEmptyString: true });
        const url = `/?${query}`;
        // localhost:3000?term=vaule. vaule is what the user is pushing to the url 
        router.push(url);

    };
    console.log(value, "hi");


    return (
        <form
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center"  >
            <Input

                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="rounded-r-none   focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />


            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none"
            >
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
        </form>
    )
};
