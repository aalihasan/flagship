import { Outlet } from "react-router";


function App() {


  return (
    <>
      <h1 class="text-3xl font-bold underline">navbar</h1>
      
      <Outlet></Outlet>
      <h1 class="text-3xl font-bold underline">footer</h1>
    </>
  );
}

export default App
