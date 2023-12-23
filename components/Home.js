import React from 'react';
import "../App.css";

import './Home.css';
const Home = () =>{       
  return (
    <div className="bg">
      <div className="main_content">
          <div className="intro">
              <h1> Translator </h1>
              <p> This website provides live translations of language to a language of the user's choice. 
              This was inspired by experiences of residents in the Pajaro Valley community, 
              and the lack of support provided to them in a time of need.
              </p>
              <h4 className="argumentText"> Why Should We Increase Multilingual Content in America?</h4>
              <p> Increasing multilingual options in America facilitates inclusion, equity, and practicality. </p>
              <h4> Inclusivity and Diversity </h4>
              <p> America prides itself on being a melting pot of cultures and languages. Embracing and accommodating linguistic diversity reflects the nation's essence. By increasing accessibility to the "9%" of people with limited English proficiency, we not only acknowledge their presence but also respect their backgrounds, overall contributing to a more inclusive society (International Coustomer Management Institute).</p>
              <h4> Economic Advantages </h4>
              <p>From a practical standpoint, catering to non-English speakers makes economic sense. Businesses and services that provide multi-language support or catering are more likely to attract a diverse customer base. According to the "'Can't Read Won't Buy'" study from CSA Research, "40%" of people will not buy products marketed in languages other than their own (Laura Blekinsopp). Offering multilingual support enables companies to significantly grow their consumer base.</p>
              <h4> Increased Access to Services </h4>
              <p>Language barriers can be a significant hindrance to accessing essential services like healthcare, education, and legal assistance. By increasing catering to non-English speakers, we bridge this gap, ensuring that everyone can access and understand vital information and services, regardless of their primary language.</p>
              <h4> Global Competitiveness </h4>
              <p>In an increasingly interconnected world, language skills are valuable assets. Encouraging multilingualism within America can boost the nation's competitiveness on the global stage, facilitating better communication and collaboration with other countries and cultures.</p>
              <h4> References </h4>
              <p>
                1. "The Growing Need for Multilingual Customer Support". <i>International Customer Management Institute.</i> 2014, https://www.icmi.com/~/media/multilanguage-customer-support-research-report.ashx
                <br></br>
                2. Blekinsopp, Laura. "The Importance of Multilingual Websites" <i>Recite me</i> 15 Nov. 2022, https://reciteme.com/news/the-importance-of-multilingual-websites/
              </p>
        </div>
      </div>
    </div>
  );
}
export default Home;

