import React, { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import People from "./components/People";
import Planets from "./components/Planets";
import Navbar from "./components/Navbar";

import { StarwarsContext } from "./hooks/StarwarsContext";

const queryClient = new QueryClient();

function App() {
  const { content } = useContext(StarwarsContext);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {content === "planets" ? <Planets /> : <People />}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
