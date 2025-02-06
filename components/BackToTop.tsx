"use client";
import React, { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 right-0 mr-5 md-5 lg:mb-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="rounded-full p-3 bg-gray-500 opacity-80 hover:bg-gray-700" onClick={scrollToTop}>
                <ArrowUp color="white" size={18}/>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white">
              <p>Back to Top</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  );
};

export default BackToTop;
