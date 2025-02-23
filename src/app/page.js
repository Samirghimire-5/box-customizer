"use client";
import { Button } from "@/components/ui/button";
import {
  ChangeBackgroundColor,
  changeShape,
  increasePadding,
  incrementHeight,
  incrementWidth,
  resize,
  marginRight,
  marginBottom,
  marginTop,
  marginLeft,
} from "@/lib/features/box/boxSlice";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
  const {
    width,
    height,
    backgroundColor,
    shape,
    padding,
    mRight,
    mLeft,
    mTop,
    mBottom,
  } = useSelector((state) => state.box);
  const dispatch = useDispatch();
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      dispatch(marginBottom());
      return;
    }
    if (e.key === "ArrowLeft") {
      dispatch(marginRight());
      return;
    }
    if (e.key === "ArrowDown") {
      dispatch(marginTop());
      return;
    }
    if (e.key === "ArrowRight") {
      dispatch(marginLeft());
      return;
    }
  };

  const divStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    padding: `${padding}px`,
    borderRadius: shape,
    marginRight: `${mRight}px`,
    marginLeft: `${mLeft}px`,
    marginTop: `${mTop}px`,
    marginBottom: `${mBottom}px`,
    transition: "all 0.3s ease",
  };

  return (
    <div className="h-screen max-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Box Customizer</h1>
      
      <section className="flex flex-col items-center mb-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 w-[600] max-w-2xl aspect-video overflow-auto p-4 flex items-center justify-center">
          <div
            onKeyDown={handleKeyDown}
            tabIndex="0"
            style={divStyle}
            className="flex items-center justify-center font-medium"
            ref={divRef}
          >
            Box
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Use arrow keys to adjust margins when box is focused
        </p>
      </section>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Controls</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={() => dispatch(incrementWidth())}
            className="w-full"
            variant="outline"
          >
            Increase Width
          </Button>
          <Button 
            onClick={() => dispatch(incrementHeight())}
            className="w-full"
            variant="outline"
          >
            Increase Height
          </Button>
          <Button 
            onClick={() => dispatch(changeShape())}
            className="w-full"
            variant="outline"
          >
            Toggle Shape
          </Button>
          <Button 
            onClick={() => dispatch(increasePadding())}
            className="w-full"
            variant="outline"
          >
            Increase Padding
          </Button>
          <Button 
            onClick={() => dispatch(ChangeBackgroundColor())}
            className="w-full"
            variant="outline"
          >
            Change Color
          </Button>
          <Button 
            onClick={() => dispatch(resize())}
            className="w-full"
            variant="outline"
          >
            Reset Size
          </Button>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link href="/alu">
            <Button className="w-full">View Dimensions</Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        Current size: {width} × {height} | Padding: {padding}px
      </div>
    </div>
  );
};

export default Box;