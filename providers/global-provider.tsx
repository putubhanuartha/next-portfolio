"use client";
import React, { useState } from "react";
import { createContext } from "react";

// const GlobalContext = createContext<VoidFunction>(() => {});
const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	// const [isAboutMeView, setIsAboutMeView] = useState();
	return <div>{children}</div>;
};

export default GlobalProvider;
