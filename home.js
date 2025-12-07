// To inject cards in home page for properties, following this Reference
// use the custom component defined in component.js
// <!-- For using cards, call the custom element like this: -->
//             <!-- <div
//               class="flex flex-wrap justify-center gap-8 mt-8 ml-8 mr-8"
//               style="padding: 15px; margin: 15px"
//             >
//               <pgverse-card
//                 img="https://content.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-adyayiouqi.jpg"
//                 title="Modern PG in Delhi"
//                 text="Fully furnished rooms with all amenities."
//                 button="View Details"
//                 link="/details"
//                 class="ml-8 mr-8 mb-8"
//               ></pgverse-card>
//             </div> -->

import { loginCheck } from "./login.js";
if (!loginCheck) {
  alert("Please login to access the Home page.");
  window.location.href = "./login.html";
}
