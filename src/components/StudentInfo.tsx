import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose} from "./ui/drawer";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="right">
  <DrawerTrigger render={<Button variant="secondary" />}>Chiraphat Pattwaeo</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="text-lg font-semibold">ข้อมูลนักศึกษา</DrawerTitle>
      <DrawerDescription>Student Information</DrawerDescription>
    </DrawerHeader>
    <div className="p-4"> <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video " />
      <img
        src="./public/profile.jpg" 
        alt="Event cover"
        className="relative h-[300px] w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Chiraphat Pattwaeo</CardTitle>
        <CardDescription>
          นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
        </CardDescription>
      </CardHeader>
      <CardContent>
          <p className="my-2">
            <Badge variant="default" className="">
          Hobbies
        </Badge> 
         เล่นเกม, ฟังเพลง, เล่นบาส
          </p>
          <p className="my-2">
            <Badge variant="default" className="">
          Email
        </Badge> 
         chiraphat_pa@cmu.ac.th
          </p>  
          <p className="my-2">
            <Badge variant="default" className="">
          Social
        </Badge> 
         Instagram: skil1zz_
          </p>
        </CardContent>
      <CardFooter>
        รหัสนักศึกษา: 680610662
      </CardFooter>
    </Card></div>
    <DrawerFooter>
      <DrawerClose render={<Button variant="default" />}>Close</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  );
}
