function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function capitalizeStr(str: string, splitter = " ") {
  return str.toLowerCase().split(splitter).map(capitalizeWord).join(" ");
}
