import { Gender } from "~/root";
import { genderify } from "~/utils/genders";

// prettier-ignore
export const questions = (gender: Gender) => gender ?
  [
    {id: 'Q01', title: `Thinking up new ideas and being creative is important to ${genderify("him", gender)}. ${genderify("he", gender, false)} ${genderify("like", gender)} to do things in ${genderify("his", gender)} own original way.`,},
    {id: 'Q02', title: `It is important to ${genderify("him", gender)} to be rich. ${genderify("he", gender, false)} wants to have a lot of money and expensive things.`,},
    {id: 'Q03', title: `${genderify('he', gender, false)} ${genderify('think', gender)} it is important that every person in the world should be treated equally. ${genderify('he', gender, false)} ${genderify('believe', gender)} everyone should have equal opportunities in life.`},
  ] : [];
