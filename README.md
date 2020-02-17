# Front-end challenge
Implement an expenses list fetching all expenses from the provided API and support filtering. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation and [Challenge details](https://github.com/pleo-io/frontend-challenge) for more information about the challenge.

## Libraries and frameworks used
- axios for server communication
- redux for maintaining the state of the application
- redux-persist for maintaining the state on refresh
- react-router for managing navigation between components
- redux-thunk for allowing redux to work with functions as actions
- react-infinite-scroll-component for enabling user to scroll through paginated chunks of data
- react-dropdown for creating and customizing a dropdown component
- postcss for more advanced styling like writing inline properties or using font-face

## How did things go
The project took around 45 hours of work. 

I believe that one of the mistakes I made was to overthink details. I oftentimes tend to imagine this perfect scenario and design for an application so that I need to constantly remind myself to focus on the big picture.

I also should have asked more questions about the expectations of some features. I realize now that I made a good deal of assumptions, which I could just have clarified with you. Lesson learnt!

Ramping back up was a bit slow but interesting as I haven't worked on a React application since university. I nevertheless enjoyed remembering how cool this technology is, as well as finding out about new concepts.

## Difficulties
The features that proved to be most difficult were "paging" navigation and fetching paginated data in combination with infinite scroll. I don't know why it took me some time to get my head around components routing, but well it works now. 

In the case of fetching data in a paginated manner, my initial implementation worked fine when having continuous blocks of data for one particular user coming from the API. Since this was not the case, the infinite scroll did not know how to ask for more data if the list of expenses was short enough to not become scrollable. Therefore, I designed a way of fetching either enough data for a user, or all of his expenses if they are very few. This also applies when filtering. <--- Functionality I'm most proud of ^_^

## Design
I think that my design is pretty intuitive, simple and clean. It is highly responsive as you will notice while playing around with the app, filtering, or adding a comment or a receipt.

On the first page, you can enter any of the emails that the api provides, or just "admin" and you will get a list with all the expenses.

I find the infinite scroll to be a nice touch having a small surprise at the end.


Overall, this project was fun. I hope you guys like it! ✨