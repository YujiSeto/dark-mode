"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="mt-15 text-3xl text-center">Dark Mode and Light Mode</h1>
        </header>
        <section className="text-center">
          <p className="m-5 ">Change between Dark and Light Mode</p>
          <Button label="Click Here" onClick={() => {}} />
        </section>
        <ThemeSwitch/>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
