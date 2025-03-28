import { Button } from "../components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>AI Video Generator</h1>
      <Button>Generate Video</Button>
      <UserButton />
    </div>
  );
}