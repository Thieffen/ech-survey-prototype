import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import ECLStyles from "@ecl/preset-ec/dist/styles/ecl-ec.css";
import TailwindStyles from "./styles/app.css";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [
    { rel: "stylesheet", href: ECLStyles },
    { rel: "stylesheet", href: TailwindStyles },
  ];
}

export type Gender = "F" | "M" | "NB";
export type Questionnaire = {};
export type AppContextType = {
  gender: Gender | null;
  genderHandler: Function;
  questionnaire: Questionnaire;
  questionnaireHandler: Function;
};

export default function App() {
  // we do not pre-select a particular gender
  const [gender, setGender] = useState<Gender | null>(null);
  const changeGender = (genderChoice: "F" | "M" | "NB") => {
    setGender(genderChoice);
  };

  const [questionnaire, setQuestionnaire] = useState<Questionnaire>({});

  const updateQuestionnaire = (questionId: string, answer: string) => {
    setQuestionnaire((prevState) => {
      const newState = { ...questionnaire, [questionId]: answer };
      return newState;
    });
  };

  const context: AppContextType = {
    gender: gender,
    genderHandler: changeGender,
    questionnaire: questionnaire,
    questionnaireHandler: updateQuestionnaire,
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="ecl-container my-6">
        <Outlet context={context} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
