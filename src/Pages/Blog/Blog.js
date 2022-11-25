import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <div>
            <div className='w-8/12 mx-auto my-10 shadow-2xl'>
                <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        1. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>There are four main types of state we need to properly manage in our React apps - Local state (UI state), Global state, Server state, URL state.
                            <br></br>
                            Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. On the other hand, Global state is managed across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Data that comes from an external server that must be integrated with our UI state are called as serve state. And finally URL states come from data that exists on our URLs, including the pathname and query parameters.
                            <br />
                            <br />
                            useState is the first tool you should reach for to manage state in your components. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState. For global state, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state. Such as; redux. The benefit of redux is that it is small, makes your entire global state a custom hook, and to read or update state, you just call this hook in your components.
                        </p>
                    </div>
                </div>

                <div tabIndex={1} className="collapse collapse-arrow border-t border-base-300 bg-base-100 ">
                    <div className="collapse-title text-xl font-medium">
                        2. How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Prototypical inheritance refers to the ability to access object properties from another object. Prototypical inheritance allows us to reuse the properties or methods from one object to another through a reference pointer function. In javascript, allows JavaScript objects inherit properties and methods from a prototype:
                            <ol className='ml-10' style={{ listStyleType: 'upper-roman' }}>
                                <li>Date objects inherit from Date.prototype.</li>
                                <li>Array objects inherit from Array.prototype.</li>
                            </ol>

                            In JavaScript, objects have a special hidden property <strong> Prototype</strong>, that is either null or references another object. That object is called “a prototype”. The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects all inherit from Object.prototype.we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”
                            <br />
                            <br />
                            JavaScript objects are dynamic "bags" of properties (referred to as own properties). It has a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        3. What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Unit testing helps developer to find the bug before actually happen in production. Lots of cases usually developers write by test codes. And after adding a new feature, if there is any error case of previous code because of adding new code, unit testing will help to find.
                            <br /> <br />
                            Unit tests save time and money. Usually, developers tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, we would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. Unit testing simplifies the debugging process
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        4. React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they’re not all the same. <br />
                            <br />
                            React doesn’t enforce a specific project structure. We can start using React with just a few lines of code. React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes. Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user. React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML).
                            <br />
                            <br />
                            The Vue.js core library focuses on the View layer only. Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
                            <br />
                            <br />
                            AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV-patterns as it is also component-based.Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;