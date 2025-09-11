//! --------------->1. Structure<------------------------

//    <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

// </head>
// <body>
    
// </body>
// </html>

//! --------------->2. Semantics<------------------------

//? https://www.codewithharry.com/tutorial/html-semantic-tags


// -> HTML5 introduced a range of semantic tags that provide meaning to the structure of web content. This blog will guide you through the importance and usage of these tags.

// -> 1. <header>: Used to represent the top section of a web page, often containing headings, logos, and navigation.
// 2. <nav>: Signifies a navigation menu on a web page.
// 3. <article>: Indicates a self-contained piece of content, such as a blog post or news article.
// 4. <section>: Represents a thematic grouping of content on a web page.
// 5. <aside>: Typically used for sidebars or content that is tangentially related to the main content.
// 6. <footer>: Represents the footer of a web page, usually containing copyright information and contact details.
// 7. <figure> and <figcaption>: Used for embedding images, diagrams, or charts, along with a caption.
// 8. <main>: Signifies the main content area of a web page.
// 9. <time>: Used to represent time-related information, like dates and times.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
//     <header>
//         <nav>
//             <ul>
//                 <li>Home</li>
//                 <li>Content</li>
//                 <li>Phone Number</li>
//             </ul>
//         </nav>
//     </header>

//     <main>
//         <h1>
//            Dolar Rutvik 
//         </h1>
//     </main>
//     <article>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem velit neque ipsa ratione ipsum sequi, possimus fugit! Ex doloremque voluptatibus officiis voluptas ea in, veritatis voluptate ratione accusantium at quia molestias itaque voluptatum quaerat, possimus animi voluptatem officia provident consequatur. Nobis incidunt totam suscipit itaque. Animi natus commodi esse!</p>
//     </article>
//     <section>
//         <option>Age</option>
//         <option>80</option>
//     </section>
//     <aside>
//         dolar rutvik    
//     </aside>
//     <figure>
//         <figcaption>Image</figcaption>
//     </figure>
//    <footer>My Delopament by Dolar Rutvik </footer>

// </body>
    
// </html>


//! 3.Introduction to HTML Forms


// HTML forms are essential for collecting user input on web pages. Whether it's a search bar, a login screen, or a multi-field registration form, HTML forms play a key role in web interactions. They enable users to submit data, which can be processed, stored, or returned by a server.

//  <form>
//         <div>
//             <!-- Texte -->
//             <label for="username"> Enter Your UserName</label>
//             <input type="text" id="username" name="username" placeholder="Enter your username">
//         </div>
//         <div>
//              <!-- Radio -->
//             <input type="radio" id="male" name="gender" value="male">
//             <label for="male">Male</label>
//             <input type="radio" id="female" name="gender" value="female">
//             <label for="female">female</label>
//         </div>
//         <div> 
//             <!-- Checkbox -->

//             <input type="checkbox" id="subscribe" name="subscribe" value="yes">
//             <label for="subscribe"> subscribe to newsletter </label>
//         </div>
//             <!-- Textearea -->
//              <div>
//                 <label for="Comment">Enter Your comment</label>
//                 <br>
//                 <textarea name="content" rows="4" cols="50">Enter Your Comment Here</textarea>
//              </div>
//              <!-- Select  -->

//              <select>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//              </select>
//     </form>

//! 4. Tables

//  <h1>Table</h1>
//     <!-- Tr Tabel Row  -->
//    <tr> 
//     <!-- Tabel Heding -->
//      <th >Name</th>  
//      <th>Age</th>
//      <th>Fav Language</th>
//    </tr>
//    <tr>
//     <!-- Tabel Data -->
//      <td colspan="2">Rutvik</td>
//      <td rowspan="2">Progress</td>
//    </tr>

//! 5. video and audio and Media
//  <video src="v1.mp4" controls loop muted poster="images.jpg"></video>
//    <audio src="tell-me-what-379638.mp3" controls autoplay loop muted preload="auto"></audio>

//  <svg width="100" height="100">
//   <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
// </svg>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/sPs4wdfm4ps?si=VvVHGdvQfjSupGM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


//! 6. SEO and Core Web Vitals in HTML

//! 7. Forme Html5 form validation

{/* <form action="" method="post">
      <fieldset>
        <legend>Booking Details</legend>
        <div>
          <label for="name">Name(requird):</label>
            <input type="text" id="name" name="name" value="" aria-describedby="name-format">
             <span id="name-format" class="help"format: firstname lastname></span>
        </div>
        <div>
          <label for="name">Website</label>
            <input type="text" id="Website" name="Website" value="">
        </div>
             <div>
          <label for="numTickets">Name(requird)<abbr title="Number">No.</abbr>of Tickets (required) :</label>
            <input type="text" id="numTickets" name="numTickets" value="">
        </div>
        <div class="submit">
           <input type="submit" value="submit">
        </div>

      </fieldset>
  </form>

 */}
