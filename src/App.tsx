import { useEffect, useState } from "react";
type TQuotes = {
  q: string;
  a: string;
  h: string;
};
const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selecedQuote, setSelectedQuote] = useState<Array<TQuotes>>([
    { a: "", q: "", h: "" },
  ]);

  async function fetchQuote() {
    setIsLoading(true);
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((json) => {
        setSelectedQuote(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-neutral-950 text-neutral-50">
      <section className="flex flex-col justify-center items-center px-4 py-4 gap-4 border-2 border-neutral-800 bg-neutral-900 rounded-lg w-11/12 max-w-screen-md">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-xl text-center font-bold border-neutral-800 border-b-2 pb-4">
            Quotes of the day
          </h1>
          <blockquote className="flex relative text-center text-balance text-lg">
            <p className="w-[99%]">
              <img
                src="images/text_quote.svg"
                aria-hidden="true"
                className="h-4 w-4 rotate-180 absolute top-0"
              />
              {!isLoading ? `${selecedQuote[0]?.q}` : `Loading..`}
              <img
                src="images/text_quote.svg"
                aria-hidden="true"
                className="h-4 w-4 absolute bottom-0 right-0"
              />
            </p>
          </blockquote>
          <a className="text-right pr-2 text-blue-50 hover:text-blue-300 italic font-medium">
            {!isLoading ? selecedQuote[0].a : "Loading.."}
          </a>
        </div>
        <p className="text-sm border-t-2 border-neutral-800 pt-2 text-center w-full">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/sanoojes"
            className="text-blue-100 hover:text-blue-300 font-medium"
          >
            sanoojes
          </a>
        </p>
      </section>
    </main>
  );
};

export default App;

