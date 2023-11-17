import React from 'react';
import './Translate.css'
const Translate = () =>{
  return (
    <div className="translate_content">
      <h3>Translate</h3>
      <div className="options_content">
        <h3> Options </h3>
        <p> Photo Upload </p>
        <form action="/action_page.php">
            <input type="text"/>
        </form>
      </div>
    </div>
  );
}
export default Translate;
