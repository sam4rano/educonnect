import { Button } from "@/components/ui/button";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="w-full bg-gray-800 h-80 flex flex-col align-middle items-center justify-center gap-8 sm:gap-4">
		<div className="flex justify-center text-center mx-auto max-w-3xl sm:max-w-sm">

      <h1 className="font-kanit text-2xl font-bold text-white p-4">Get Answers to your assignment, Help a student answer their question on <span>EduConnect</span></h1>
		</div>
      <div className="flex flex-row sm:flex-col sm:justify-center sm:align-middle gap-4">
        <Button asChild className="bg-blue-500 p-4 hover:bg-blue-300 text-white font-kanit font-bold">
          <Link href={"#"}>Ask Questions</Link>
        </Button>
        <Button asChild className="bg-orange-500 hover:bg-orange-300 p-4 text-white font-kanit font-bold">
          <Link href={"#"}>Answer Questions</Link>
        </Button>
      </div>
    </div>
  );
};

export default Herosection;
