// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * components
 */


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {

    useGSAP(() => {
      const elements = gsap.utils.toArray('.reveal-up');

      elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: '-200 bottom',
            end:'bottom 80% ',
            scrub: true
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        })
      });
    });
    return (
      <ReactLenis root>
      <Header 
          <!-- Start of Async ProveSource Code --><script>!function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){window.provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2OGIwMWVhODM4ZDgxNWVkZTg2NTg4YTUiLCJpYXQiOjE3NTYzNzI2NDh9.gafayjRfCEZ76aUcKsq3GjfY6gQRhyTYji97hQtsVwc",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document);</script><!-- End of Async ProveSource Code -->
              
          <!-- Pixel Code - https://66socialproof.com/demo/ -->
<script defer src="https://66socialproof.com/demo/pixel/jeaJKRG64OZyrZjAu5PPwdm8DgR7jvJH"></script>
<!-- END Pixel Code -->
          />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
        </main>
      <Footer />
      </ReactLenis> 
        
    )
}

export default App;
