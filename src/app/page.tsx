"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const HomeContent = () => {
  const themeCtx = useTheme();

  const toggleTheme = () => {
    if (themeCtx) {
      themeCtx.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <Container>
      <header className="py-5">
        <h1 className="mt-15 text-3xl text-center">Dark Mode and Light Mode</h1>
      </header>
      <section className="text-center">
        <p className="m-5">Change between Dark and Light Mode</p>
        <Button label="Click Here" onClick={toggleTheme} />
      </section>
      <ThemeSwitch />
    </Container>
  );
};

const Page = () => {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
};

export default Page;
