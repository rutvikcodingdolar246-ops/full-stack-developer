


// import"./components/Netflix.css"
import"./components/Netflix.module.css"
import NetflixSeries  from "./components/NetflixSeries"
export const App = () =>{

  return(
   <section className="container">
      <h1 className="card-heading">List of best Netflix Series</h1>
      <NetflixSeries/>
   </section>
    
  )
}
