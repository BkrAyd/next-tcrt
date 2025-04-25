"use client"    

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const AlertDialogExample = () => {

    const handleBildirim=()=>{
        console.log("Bildirimler açıldı");
    }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <Button variant="default" className="cursor-pointer w-full justify-start">
              <Bell />
            </Button>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bildirimler</AlertDialogTitle>
            <AlertDialogDescription>
              Bildirimleri almak için bildirimlerinizi açın.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBildirim}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogExample;
