import { Gender } from "~/root";

const genderMatrix = {
  F: ["She", "Her", "Her"],
  M: ["He", "him", "His"],
  NB: ["They", "Them", "Their"],
};

export function genderify(
  word: string,
  gender: Gender,
  lowercase: boolean = true
) {
  switch (word) {
    case "he":
      return lowercase
        ? genderMatrix[gender][0].toLowerCase()
        : genderMatrix[gender][0];
    case "him":
      return lowercase
        ? genderMatrix[gender][1].toLowerCase()
        : genderMatrix[gender][1];
    case "his":
      return lowercase
        ? genderMatrix[gender][2].toLowerCase()
        : genderMatrix[gender][2];
    default:
      return gender !== "NB" ? word + "s" : word;
  }
}
