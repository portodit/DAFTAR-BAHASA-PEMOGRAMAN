interface ProgrammingLanguage {
    name: string;
    rank: number;
    imageUrl: string;
    link: string;
  }
  
  const programmingLanguages: ProgrammingLanguage[] = [
    {
      name: "JavaScript",
      rank: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Python",
      rank: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      link: "https://www.python.org/"
    },
    {
      name: "Java",
      rank: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      link: "https://www.oracle.com/java/"
    },
    {
      name: "C#",
      rank: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
      name: "PHP",
      rank: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      link: "https://www.php.net/"
    },
    {
      name: "C++",
      rank: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      link: "https://isocpp.org/"
    },
    {
      name: "TypeScript",
      rank: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      link: "https://www.typescriptlang.org/"
    },
    {
      name: "Ruby",
      rank: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      link: "https://www.ruby-lang.org/en/"
    },
    {
      name: "Swift",
      rank: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      link: "https://developer.apple.com/swift/"
    },
    {
      name: "Kotlin",
      rank: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      link: "https://kotlinlang.org/"
    }
  ];
  
  export default programmingLanguages;
  