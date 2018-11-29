/* example project object:
 *  let sampleProject = {
 *    imageUrl: 'img/project.png',
 *    title: 'app_name',
 *    desc: 'app_desc',
 *    tags: ['tag1', 'tag2', 'tag3'],
 *    link: 'https://www.github...',
 *  }
 */

let projects = [
  {
    imageUrl: 'img/Boost Promotions.png',
    title: 'Boost Promotions',
    desc: 'E-Commerce site for purchasing Swag Tags for Student Rewards. Custom forms for different types of product, Different pricing schemes and discounts available.',
    link: 'https://boostpromotions.com',
    tags: ['cakephp', 'angularjs', 'Converge API', 'bootstrap', 'php', 'mysql', 'Zen Cart', 'SEO'],
  },
  {
    imageUrl: 'img/Unplugged Challenge  Using Digital Detox for kids.png',
    title: 'Unplugged Challenge',
    desc: 'Shop Activity Kits for children to spend less time on screen. Referral System for teachers and students. Schools can host unplugged event and earn commissions. All this can be done online and with admin dashboard',
    link: 'https://unpluggedchallenge.com',
    tags: ['bootstrap', 'cakephp', 'AJAX', 'mysql', 'php'],
  },
  {
    imageUrl: 'img/USBC YOUTH BOWLING AWARDS.png',
    title: 'USBC Youth Bowling Awards',
    desc: 'Shop Bowling themed Dog Tags, e-commerce site made to function just like its parent site boostpromotions.com but optimized for SEO',
    link: 'http://youthbowlingawards.com',
    tags: ['php', 'jquery', 'bootstrap', 'SEO', 'mysql'],
  },
  {
    imageUrl: 'img/CJR DISTRIBUTING CLICKER PRESS.png',
    title: 'CJRTEC',
    desc: 'Connects customers online to order small to large manufacturing machines that are MADE IN USA. With stocks available on US Office',
    link: 'http://cjrtec.com',
    tags: ['bootstrap', 'php', 'jquery', 'SEO', 'mysql'],
  },
  {
    imageUrl: 'img/Falkin Pest Control – Different From The Rest.png',
    title: 'Falkin Pest Control',
    desc: 'Pest Control website demonstrating my skills in wordpress and sitebuilder.',
    link: 'https://falkinpestcontrol.com',
    tags: ['Page Builder by SiteOrigin', 'wordpress', 'wordpress plugins', 'php', 'SEO', 'Google Maps'],
  },
  {
    imageUrl: 'img/eTravelMo.png',
    title: 'eTravelMo',
    desc: '',
    link: 'http://www.kaseltravel.com/',
    tags: ['TravelPort API', 'ASP.NET', 'MVC', 'xml', 'SQL Server'],
  },
  {
    imageUrl: 'img/SimSig Home Page   SimSig   Simulator of Railway Signalling Systems.png',
    title: 'SimSig',
    desc: 'railways simulator shopping site.',
    link: 'http://simsig.co.uk',
    tags: ['Paypal API', 'ASP.NET', 'MVC', 'bootstrap', 'live chat'],
  },
]

/** creates a portfolio piece template
 * @param project {object} The data of the project to fill portfolio piece with
 * @return {string} the portfolio piece template */
let portfolioPiece = (project) => {
  return `
    <article class="app-container">
      <a href="${project.imageUrl}" target="_blank"><img class="app-image" src="${project.imageUrl}"/></a>

      <div class="app-container-content">
        <h2 class="app-title"><a href="${project.link}">${project.title}</a></h2>
        <p class="app-desc">${project.desc}</p>
        <a class="redirect-link" href="${project.link}" target="_blank">Learn More.</a>
        <ul class="tag-list">
          ${project.tags.map(label => `<li class="tag">${label}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

let portfolio = `
  <section class="portfolio">


  <h1>My Portfolio</h1>

  ${projects.map(project => portfolioPiece(project)).join('')}

  </section>
`;