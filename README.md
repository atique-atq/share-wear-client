# ShareWeare
## Website for purchasing second hand dresses

Live URL [ShareWear](https://sharewearbd.web.app/).

## Features and Technology:


### `Features and Functionalities`

* E-commerce website for purchasing second hand dressed around the country.
* Here in the homepage, Customer will see navbar will necessary menu, a landing banner with necessary images and information. Below that banner, category of the available dresses will be found. Upon click on the show details product of that category will be shown.
* In products page under a specific category, card of the available products will be shown. If any seller is verified by the `admin` there will be `tick` means `verified seller` by the admin. , 
* If user find any unwanted product, he/she can report that specific product which will be deleted by the admin later.
* In the advertisement section, if seller wants to be shown in advertisement, will be be in this section.
* Besides `authentication` of seller, buyer and admin, `authorization` of each roll has been implemented. Where `seller` can add product,delete product, admin can `delete seller`, `delete` buyer and reported items. 
* From booked items, buyer can complete his online `payment`.


### `Technologies`
* This is a single page application has been implemented using react, tailwind, daisyUi, html
* For authentication purpose we have used google firebase.
* Also we have implemented react router dom, context api, private router etc.
* for server side we have used express js which have been deployed in vercel.
* `Stripe` has been implemented as payment gateway.
* all the sites part have been made responsive.