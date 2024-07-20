import { Aggregate } from "mongoose";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  let myObj = {
    username: "samir",
    age: 21
  }

  let newArr  = [3, 4, 5]
  // const img = 'https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  return (
    <>
      <h1 className="text-3xl animate-bounce bg-green-400 text-red-600 p-4 rounded-xl mb-4">
        Hello{" "}
      </h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

      <Card username= "samir" btnText = "clickme" />
      <Card username="Saroj" /> 
      


    </>
  );
}

export default App; 

