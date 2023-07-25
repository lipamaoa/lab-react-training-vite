import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

function App() {
  const exampleIdCardData = [
    {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      lastName: "Delores",
      firstName: "Obrien",
      gender: "female",
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const exampleGreetings = [
    {
      lang: "es",
      children: "Joe",
    },

    { lang: "en", children: "Peter" },
  ];

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {exampleIdCardData.map((card, index) => (
        <IdCard key={index} {...card} />
      ))}
      {exampleGreetings.map((greeting, index) => (
        <Greetings
          key={index}
          lang={greeting.lang}
          children={greeting.children}
        />
      ))}
    </div>
  );
}

export default App;
