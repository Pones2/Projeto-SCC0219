Projeto para a Disciplinha SCC0219 - Introdução ao Desenvolvimento Web<br>
<h4>Proposta : Você é um desenvolvedor de software e um de seus clientes o contratou para criar uma loja online.</h4>


<h3>Integrantes : <br></h3>
Felipe Seiji Momma Valente - 12543700<br>
Rodrigo de Freitas Lima - 12547510 <br>
<br>

<h2>Parte 1: Mockup da loja</h2>
<p class="c18 title" id="h.ftbyzibxwod1"><span class="c4 c17">Project Report - Milestone 1</span></p><h3 class="c10" id="h.y8twtzxajku"><span class="c0">Requirements</span></h3><ul class="c16 lst-kix_trtnftnsy82f-0 start"><li class="c11 c9 li-bullet-0"><span class="c4 c2">Store focused on selling items.</span></li><li class="c11 c9 li-bullet-0"><span class="c2">The system has 2 types of users: Clients and Administrators</span></li></ul><ul class="c16 lst-kix_trtnftnsy82f-1 start"><li class="c14 li-bullet-0"><span class="c2">Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account </span><span class="c2 c7">admin</span><span class="c2">&nbsp;with password </span><span class="c2 c7">admin</span><span class="c2">.</span></li><li class="c14 li-bullet-0"><span class="c2">Customers are users who access the system to buy products/services.</span></li></ul><ul class="c16 lst-kix_trtnftnsy82f-0"><li class="c11 c9 li-bullet-0"><span class="c2">The admin record includes: name, id, phone, email.</span></li><li class="c11 c9 li-bullet-0"><span class="c2">Each customer's record includes: name, id, address, phone, email</span></li><li class="c11 c9 li-bullet-0"><span class="c2">Product/services records include: name, id, photo, description, price, quantity (in stock), quantity sold.</span></li><li class="c11 c9 li-bullet-0"><span class="c2">Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.</span></li><li class="c9 c11 li-bullet-0"><span class="c2">Administrators can create/update/read/delete new products and services. For example, they can change the stock quantity.</span></li><li class="c11 c9 li-bullet-0"><span class="c12">Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down. &nbsp; </span></li><li class="c11 c9 li-bullet-0"><span class="c2 c4">The system must provide accessibility requirements and provide good usability. The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.</span></li></ul><h3 class="c11 c15" id="h.1gbsgejweb7v"><span class="c0">Description</span></h3><ul class="c16 lst-kix_gw1epp1eb78a-0 start"><li class="c6 c9 li-bullet-0"><span class="c3">Mockup for a store focused on selling pet shop items. </span></li><li class="c6 c9 li-bullet-0"><span>Diagram: </span><span class="c19"><a class="c13" href="https://www.google.com/url?q=https://www.figma.com/file/4tiiKPwsFKTi7qcrllICG0/Pet-Shop-Website?node-id%3D0%253A1%26t%3DIjxkVtQpD2KpJ3mR-1&amp;sa=D&amp;source=editors&amp;ust=1683479845536425&amp;usg=AOvVaw0JwczPJD1Jwc1S-rIXU5up">https://www.figma.com/file/4tiiKPwsFKTi7qcrllICG0/Pet-Shop-Website?node-id=0%3A1&amp;t=IjxkVtQpD2KpJ3mR-1</a></span></li><li class="c6 c9 li-bullet-0"><span>The project is visually almost complete, with few missing pages.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Project still doesn’t save login data, therefore it can’t differentiate between admins and consumers.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Items sold are hardcoded into the html file, therefore can’t be modified and don’t have the necessary parameters.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Page for a specified product is incomplete.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Shopping cart is non-functional.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Contact information is not sent to the server.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Filter functionality is not implemented.</span></li><li class="c6 c9 li-bullet-0"><span class="c3">No specific functionality is implemented.</span></li></ul><p class="c6 c8"><span class="c3"></span></p><h3 class="c10" id="h.wbcrhckkwchp"><span class="c0">Comments about the code</span></h3><p class="c5"><span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most of the code at this stage consists only of html and css files, apart from a single javascript function used to roll the slides in the main page.</span></p><p class="c6 c8"><span class="c3"></span></p><h3 class="c10" id="h.p56kfkndingb"><span>Test plan</span></h3><p class="c6"><span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Test if the html mockups work fine, with no problems with the css.</span></p><h3 class="c10" id="h.fzkgqeam1n4o"><span class="c0">Test results</span></h3><p class="c6"><span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The pages were tested with Microsoft Edge and Mozilla Firefox. In the default aspect ratio (16x9) for desktops, the page works with no problems. But, with smaller width in desktop and in mobile browsers, the CSS in the page breaks. However, since at this stage the page is just a mockup, the team decided together that no fix was necessary at this milestone, and it will be fixed at a future time.</span></p><h3 class="c10" id="h.e9y7xnbu1s6q"><span class="c0">Build procedures</span></h3><ol class="c16 lst-kix_ok8cmbit94vu-0 start" start="1"><li class="c6 c9 li-bullet-0"><span class="c3">Install a browser with HTML5 and CSS3 support (such as Google Chrome, Firefox or Safari).</span></li><li class="c6 c9 li-bullet-0"><span class="c3">Open the index.html file contained in the folder /Projeto-SCC0219</span></li></ol><p class="c6 c8"><span class="c3"></span></p><h3 class="c10" id="h.462ij8mekqeu"><span class="c0">Problems</span></h3><ul class="c16 lst-kix_yumo3asg0d2s-0 start"><li class="c6 c9 li-bullet-0"><span class="c3">CSS breaks in mobile browsers and small width aspect ratios.</span></li></ul><h3 class="c10" id="h.r6cwc6fm8t38"><span class="c0">Comments</span></h3><p class="c6"><span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since this is a mockup, the page design and style is susceptible to changes in the future.</span></p>
<h2>Parte 2: Funcionalidade do cliente</h2>

<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body class="c13 doc-content"><h3 class="c18" id="h.1fob9te"><span class="c0">Requirements</span></h3><ul class="c1 lst-kix_rsyrkxjtpj3w-0 start"><li class="c5 li-bullet-0"><span class="c6 c2">Online store focused on selling pet shop items</span></li><li class="c5 li-bullet-0"><span class="c2">The system has 2 types of users: Clients and Administrators</span></li></ul><ul class="c1 lst-kix_rsyrkxjtpj3w-1 start"><li class="c19 li-bullet-0"><span class="c2">Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account </span><span class="c2 c8">admin</span><span class="c2">&nbsp;with password </span><span class="c2 c8">admin</span><span class="c2">.</span></li><li class="c19 li-bullet-0"><span class="c2">Customers are users who access the system to buy products/services.</span></li></ul><ul class="c1 lst-kix_rsyrkxjtpj3w-0"><li class="c5 li-bullet-0"><span class="c2">The admin record includes: name, id, phone, email, address, admin privileges.</span></li><li class="c5 li-bullet-0"><span class="c2">Each customer&#39;s record includes, at least: name, id, address, phone, email.</span></li><li class="c5 li-bullet-0"><span class="c2">Product/services records include: name, id, photo, description, price, quantity (in stock), quantity sold.</span></li><li class="c5 li-bullet-0"><span class="c2">Products can be selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). Carts are emptied only on payment or by customers.</span></li><li class="c5 li-bullet-0"><span class="c2">Product/Service Management: Administrators can create/update/read/delete new products. For example, they can change the stock quantity.</span></li><li class="c5 li-bullet-0"><span class="c2">Your functionality: The user can filter the products for easier accessibility.</span></li><li class="c5 li-bullet-0"><span class="c6 c2">The system provides accessibility requirements and provides good usability. The system is responsive, meaning that it can complete assigned tasks within a reasonable time.</span></li></ul><h3 class="c9" id="h.bkkjagugtu4b"><span class="c0">Description</span></h3><ul class="c1 lst-kix_j2tm7x61in7n-0 start"><li class="c7 li-bullet-1"><span class="c3">React implementation of the front-end of a pet shop website.</span></li><li class="c7 li-bullet-1"><span class="c3">Pseudo login system (no server side) that simulates correctly customers and admins, including their permissions.</span></li><li class="c7 li-bullet-1"><span class="c3">Pseudo product collection (no server side) that simulates the available products in the shop, including their characteristics and the capability to add them to the shopping cart.</span></li><li class="c7 li-bullet-1"><span class="c3">Pseudo purchase system (data is not sent to server) that simulates a credit card input and can register the address for delivery.</span></li><li class="c7 li-bullet-2"><span class="c3">Pseudo management system (data can&rsquo;t be saved in the server) that simulates admin capabilities of registering and editing products.</span></li><li class="c7 li-bullet-1"><span>Products data include </span><span class="c6 c2">name, id, photo, description, price, quantity (in stock), quantity sold for each product, with ease of expandability.</span></li><li class="c7 li-bullet-1"><span class="c2 c6">Users data include name, id, phone, email, address, admin privileges (whether they exist) for each customer and admin, with ease of expandability.</span></li><li class="c7 li-bullet-1"><span class="c6 c2">Front-end pages for every feature of the website, including error handling and styling.</span></li><li class="c7 li-bullet-1"><span class="c6 c2">Project designed for desktops and mobile devices, allowing users to access the website in their preferred platform.</span></li></ul><p class="c12"><span class="c6 c2"></span></p><h3 class="c10" id="h.jcgi7id4szp9"><span class="c0">Comments about the code</span></h3><ul class="c1 lst-kix_z5htemmyi8y5-0 start"><li class="c7 li-bullet-1"><span class="c3">Code is subdivided into multiple jsx and css files, and the structure of the project is made of multiple components that interact with each other, allowing the creation of multiple pages. If the returned html of a page jsx is confusing, try checking the components that make it up.</span></li><li class="c7 li-bullet-1"><span class="c3">Components are inside /src/Components.</span></li><li class="c7 li-bullet-1"><span class="c3">Pages are inside /src/Pages</span></li><li class="c7 li-bullet-1"><span class="c3">The mockup date is inside /public/</span></li></ul><h3 class="c10" id="h.4p5mgp7in0yh"><span class="c0">Test plan</span></h3><ul class="c1 lst-kix_n5xf6zj2vru7-0 start"><li class="c7 li-bullet-1"><span class="c3">For every page, the css was tested to see if it works on mobile devices and desktop.</span></li><li class="c7 li-bullet-1"><span class="c3">For every page, the components were tested to see if they are behaving correctly.</span></li><li class="c7 li-bullet-1"><span class="c3">For the pages that required getting information, a simulation using setTimeout() was made to see if they were able to correctly fetch information.</span></li><li class="c7 li-bullet-1"><span class="c3">For the pages that required setting information, a simulation using localStorage.setItem() was made to see if they were able to correctly send information.</span></li><li class="c7 li-bullet-1"><span>For pages that behaved differently for admins and customers, different tests were made for each case.</span></li></ul><h3 class="c10" id="h.yg83dgk8w5wu"><span class="c0">Test results</span></h3><ul class="c1 lst-kix_8ru9n1vt0jea-0 start"><li class="c7 li-bullet-1"><span class="c3">Every page functionality and CSS is working correctly in both WEB and Mobile.</span></li><li class="c7 li-bullet-1"><span class="c3">Every data is stored in the local storage.</span></li><li class="c7 li-bullet-1"><span class="c3">Both &lsquo;Admin&rsquo; and &lsquo;User&rsquo; accounts are working accordingly.</span></li><li class="c7 li-bullet-1"><span>Every test realized was in the latest Chrome web browser, and the mobile was tested in the Chrome mobile application viewer. </span></li></ul><h3 class="c10" id="h.lqw4xmzapclb"><span class="c0">Build procedures</span></h3><ol class="c1 lst-kix_uti6taqy0myf-0 start" start="1"><li class="c7 li-bullet-1"><span>Download and install the latest version of </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=https://nodejs.org/en&amp;sa=D&amp;source=editors&amp;ust=1686536618108637&amp;usg=AOvVaw1FiZ1trDrQjKD0LoMvRJC_">Node.js</a></span><span class="c3">.</span></li><li class="c7 li-bullet-1"><span class="c3">Open the terminal on the folder you want the project to be in and run the command &ldquo;npx create-react-app pet-shop&rdquo;</span></li></ol><ol class="c1 lst-kix_uti6taqy0myf-1 start" start="1"><li class="c4 li-bullet-1"><span class="c3">On Windows, to open the terminal on a specific folder, open that folder on file explorer, shift + right click and select &ldquo;Open PowerShell window here&rdquo;.</span></li><li class="c4 li-bullet-1"><span class="c3">On Mac, to open the terminal on a specific folder, select the folder on Finder, right click and select &ldquo;New Terminal at Folder&rdquo;.</span></li><li class="c4 li-bullet-1"><span class="c3">On linux, to open the terminal on a specific folder, open that folder on the file explorer, right click and select &ldquo;Open in Terminal&rdquo;.</span></li></ol><ol class="c1 lst-kix_uti6taqy0myf-0" start="3"><li class="c7 li-bullet-1"><span>Download or clone the code in the </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=https://github.com/Pones2/Projeto-SCC0219/tree/milestone-2&amp;sa=D&amp;source=editors&amp;ust=1686536618109442&amp;usg=AOvVaw2vIqn44bvtp-P0jds7JebC">github</a></span><span class="c3">.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;cd pet-shop&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;npm run build&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;npm install -g serve&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;serve -s build&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span>Open </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=http://localhost:3000&amp;sa=D&amp;source=editors&amp;ust=1686536618109978&amp;usg=AOvVaw00ZwW_zQmjWxEZoMg-oeTy">http://localhost:3000</a></span><span class="c3">&nbsp;in the browser.</span></li></ol><p class="c12"><span class="c3"></span></p><h3 class="c10" id="h.g8bjvvfpaalr"><span class="c0">Problems</span></h3><p class="c11"><span>A few warnings were lit when compiling the page, but they didn&rsquo;t affect anything, so the team decided it was not a problem.</span></p><h3 class="c10" id="h.vxvq4hk0g294"><span>Comments</span><span class="c0">.</span></h3><p class="c11"><span class="c3">No comments.</span></p><p class="c15"><span>&nbsp;</span></p><p class="c12"><span class="c3"></span></p><p class="c17"><span class="c6 c2"></span></p><p class="c12"><span class="c3"></span></p></body></html>

<h2>Parte Final: Aplicação totalmente funcional</h2>

<h3> Requirements: </h3>

<ul>
    <li> Online store focused on selling pet shop items </li>
    <li> The system has 2 types of users: Clients and Administrators </li>
    <li>Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin. </li>
    <li> Customers are users who access the system to buy products/services. </li>
    <li> The admin record includes: name, id, phone, email, address, admin privileges. </li>
    <li> Each customer's record includes, at least: name, id, address, phone, email.</li>
    <li> Product/services records include: name, id, photo, description, price, quantity (in stock), quantity sold.</li>
    <li> Products can be selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). Carts are emptied only on payment or by customers.</li>
    <li> Product/Service Management: Administrators can create/update/read/delete new products. For example, they can change the stock quantity.</li>
    <li> Your functionality: The user can send messages and the admins can read those messages. </li>
    <li> The system provides accessibility requirements and provides good usability. The system is responsive, meaning that it can complete assigned tasks within a reasonable time.</li>
</ul>

<h3> Description: </h3>

<ul>
  <li> Full implementation of a pet-shop ecommerce website </li>
  <li> Front-end made with React </li>
  <li> Back-end made with MongoDB </li>
  <li> Project designed for desktops and mobile devices </li>
    <li> Admin mock account: admin@admin.com (password: 123) </li>
    <li> Client mock account: teste@teste.com (password: 123)</li>
</ul>

<h3> Comments about the code </h3>
<ul>
    <li> In addition to the front-end implemented in the Milestone 2, the backend code was made. </li>
    <li> The backend code can be found in the /backend folder </li>
    <li> Aditionally, the frontend was modified to be linked with the backend</li>
</ul>

<h3> Test Plan: </h3>

<ul>
    <li> Verify if every server call is being made correctly </li>
    <li> Verify login and account to see if the users are being called correctly </li>
    <li> Verify products to see if the products are being called correctly </li>
    <li> Verify shopping cart to see if the sold products are being called correctly </li>
    <li> Verify contacts page to see if they are being called correctly. </li>
</ul>

<h3> Test Results: </h3>

<ul>
    <li> No problems found in the tests. </li>
</ul>

<h3> Build Procedures: </h3>

<ol class="c1 lst-kix_uti6taqy0myf-0 start" start="1"><li class="c7 li-bullet-1"><span>Download and install the latest version of </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=https://nodejs.org/en&amp;sa=D&amp;source=editors&amp;ust=1686536618108637&amp;usg=AOvVaw1FiZ1trDrQjKD0LoMvRJC_">Node.js</a></span><span class="c3">.</span></li><li class="c7 li-bullet-1"><span class="c3">Open the terminal on the folder you want the project to be in and run the command &ldquo;npx create-react-app pet-shop&rdquo;</span></li></ol><ol class="c1 lst-kix_uti6taqy0myf-1 start" start="1"><li class="c4 li-bullet-1"><span class="c3">On Windows, to open the terminal on a specific folder, open that folder on file explorer, shift + right click and select &ldquo;Open PowerShell window here&rdquo;.</span></li><li class="c4 li-bullet-1"><span class="c3">On Mac, to open the terminal on a specific folder, select the folder on Finder, right click and select &ldquo;New Terminal at Folder&rdquo;.</span></li><li class="c4 li-bullet-1"><span class="c3">On linux, to open the terminal on a specific folder, open that folder on the file explorer, right click and select &ldquo;Open in Terminal&rdquo;.</span></li></ol><ol class="c1 lst-kix_uti6taqy0myf-0" start="3"><li class="c7 li-bullet-1"><span>Download or clone the code in the </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=https://github.com/Pones2/Projeto-SCC0219/tree/milestone-2&amp;sa=D&amp;source=editors&amp;ust=1686536618109442&amp;usg=AOvVaw2vIqn44bvtp-P0jds7JebC">github</a></span><span class="c3">.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;cd pet-shop&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;npm run build&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;npm install -g serve&rdquo; on the terminal.</span></li><li class="c7 li-bullet-1"><span class="c3">Run the command &ldquo;serve -s build&rdquo; on the terminal.</span></li>
<li> Install the latest version of <a href="https://www.mongodb.com/docs/manual/installation/"> MongoDB </a> for your platform </li>
<li> Run the index.js in the /backend folder </li>
<li> Install the latest version of <a href="https://www.mongodb.com/try/download/compass"> Compass </a> for your platform </li>
<li> Open Compass and start the server on the default port(mongodb://localhost:27017)</li>
<li> Populate the petshop databese with the data inside the /Banco_De_Dados_Exemplo folder</li>
<li class="c7 li-bullet-1"><span>Open </span><span class="c16"><a class="c14" href="https://www.google.com/url?q=http://localhost:3000&amp;sa=D&amp;source=editors&amp;ust=1686536618109978&amp;usg=AOvVaw00ZwW_zQmjWxEZoMg-oeTy">http://localhost:3000</a></span><span class="c3">&nbsp;in the browser.</span></li>
</ol>
