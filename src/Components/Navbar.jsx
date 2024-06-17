// import React from 'react';

// const Navbar = ({ setCategory, setCountry }) => {
//   return (
//     <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between"style={{width: 999}}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <span className="badge bg-light text-dark fs-4">NewsMag</span>
//           </a>
//           <button
//             className="navbar-toggler mx-3 my-2"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon "style={{padding:5}}></span>
//           </button>
//           <div className="collapse navbar-collapse sticky-top" style={{padding:5}} id="navbarNavAltMarkup">
//             <ul className="navbar-nav">
//               <li>
//                 <select className="nav-link bg-dark text-light" onChange={(e) => setCountry(e.target.value)}>
//                   <option value="country">Country</option>
//                   <option value="ar">Argentina</option>
//                   <option value="gr">Greece</option>
                  // <option value="nl">Netherland</option>
                  // <option value="za">South Africa</option>
                  // <option value="au">Australia</option>
                  // <option value="hk">Hong Kong</option>
                  // <option value="nz">New Zealand</option>
                  // <option value="kr">South Korea</option>
                  // <option value="at">Austria</option>
                  // <option value="hu">Hungary</option>
                  // <option value="ng">Nigeria</option>
                  // <option value="se">Sweden</option>
                  // <option value="in">India</option>
                  // <option value="be">Belgium</option>
                  // <option value="no">Norway</option>
                  // <option value="ch">Switzerland</option>
                  // <option value="br">Brazil</option>
                  // <option value="id">Indonesia</option>
                  // <option value="ph">Philippines</option>
                  // <option value="tw">Taiwan</option>
                  // <option value="bg">Bulgaria</option>
                  // <option value="ie">Ireland</option>
                  // <option value="pl">Poland</option>
                  // <option value="th">Thailand</option>
                  // <option value="ca">Canada</option>
                  // <option value="il">Israel</option>
                  // <option value="pt">Portugal</option>
                  // <option value="cn">China</option>
                  // <option value="it">Italy</option>
                  // <option value="ro">Romania</option>
                  // <option value="ae">UAE</option>
                  // <option value="co">Colombia</option>
                  // <option value="jp">Japan</option>
                  // <option value="ru">Russia</option>
                  // <option value="ua">Ukraine</option>
                  // <option value="cu">Cuba</option>
                  // <option value="lv">Latvia</option>
                  // <option value="sa">Saudi Arabia</option>
                  // <option value="gb">UK</option>
                  // <option value="cz">Czech Republic</option>
                  // <option value="lt">Lithuania</option>
                  // <option value="rs">Serbia</option>
                  // <option value="us">USA</option>
                  // <option value="eg">Egypt</option>
                  // <option value="my">Malaysia</option>
                  // <option value="sg">Singapore</option>
                  // <option value="ve">Venuzuela</option>
                  // <option value="fr">France</option>
                  // <option value="mx">Mexico</option>
                  // <option value="sk">Slovakia</option>
                  // <option value="si">Slovenia</option>
                  // <option value="ma">Morocco</option>
                  // <option value="de">Germany</option>
//                 </select>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("general")}>
//                   General
//                 </div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("technology")}>
//                   Technology
//                 </div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("business")}>
//                   Business
//                 </div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("health")}>Health</div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("sport")}>Sport</div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("science")}>Science</div>
//               </li>
//               <li>
//                 <div className="nav-link btn btn-secondary" onClick={() => setCategory("entertainment")}>Entertainment</div>
//               </li>
//               {/* Add more category options with onClick events */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = ({ setCategory, setCountry }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4 link-danger">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <select className="form-select bg-dark text-light" onChange={(e) => setCountry(e.target.value)}>
                <option value="country">Country</option>
                <option value="ar">Argentina</option>
                <option value="gr">Greece</option>
                <option value="nl">Netherland</option>
                <option value="za">South Africa</option>
                <option value="au">Australia</option>
                <option value="hk">Hong Kong</option>
                <option value="nz">New Zealand</option>
                <option value="kr">South Korea</option>
                <option value="at">Austria</option>
                <option value="hu">Hungary</option>
                <option value="ng">Nigeria</option>
                <option value="se">Sweden</option>
                <option value="in">India</option>
                <option value="be">Belgium</option>
                <option value="no">Norway</option>
                <option value="ch">Switzerland</option>
                <option value="br">Brazil</option>
                <option value="id">Indonesia</option>
                <option value="ph">Philippines</option>
                <option value="tw">Taiwan</option>
                <option value="bg">Bulgaria</option>
                <option value="ie">Ireland</option>
                <option value="pl">Poland</option>
                <option value="th">Thailand</option>
                <option value="ca">Canada</option>
                <option value="il">Israel</option>
                <option value="pt">Portugal</option>
                <option value="cn">China</option>
                <option value="it">Italy</option>
                <option value="ro">Romania</option>
                <option value="ae">UAE</option>
                <option value="co">Colombia</option>
                <option value="jp">Japan</option>
                <option value="ru">Russia</option>
                <option value="ua">Ukraine</option>
                <option value="cu">Cuba</option>
                <option value="lv">Latvia</option>
                <option value="sa">Saudi Arabia</option>
                <option value="gb">UK</option>
                <option value="cz">Czech Republic</option>
                <option value="lt">Lithuania</option>
                <option value="rs">Serbia</option>
                <option value="us">USA</option>
                <option value="eg">Egypt</option>
                <option value="my">Malaysia</option>
                <option value="sg">Singapore</option>
                <option value="ve">Venuzuela</option>
                <option value="fr">France</option>
                <option value="mx">Mexico</option>
                <option value="sk">Slovakia</option>
                <option value="si">Slovenia</option>
                <option value="ma">Morocco</option>
                <option value="de">Germany</option>
                {/* Add more country options */}
              </select>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("general")}>
                General
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("technology")}>
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("business")}>
                Business
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("health")}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("sport")}>Sport</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("science")}>Science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-secondary" onClick={() => setCategory("entertainment")}>Entertainment</button>
            </li>
            {/* Add more category options with onClick events */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
