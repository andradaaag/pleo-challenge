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
The project took around 30 hours of work. 

I believe that one of the mistakes I made was to overthink details. I oftentimes tend to imagine this perfect scenario and design for an application so that I need to constantly remind myself to focus on the big picture.

I think I also should have asked more questions about the expectations of some features. I realize now that I made a good deal of assumptions, which I could just have clarified with you. Lesson learnt!

Ramping back up was a bit slow but interesting as I haven't worked on a React application since university. I nevertheless enjoyed remembering how cool this technology is, as well as finding out about new concepts.

## Difficulties
The features that proved to be most difficult were "paging" navigation and image loading. I don't know why it took me some time to get my head around components routing, but well it works now. 

In the case of the image uploading, I discovered that Redux doesn't like File objects the hard way. I was trying to persist the uploaded image so that, before hitting the 'Save' button, if you accidentally refreshed the page, then the image would stay there.

So I had two problems here: focusing too much on the refresh functionality which was not required but I was keen on making happen and my lack of knowledge about the File object which doesn't have any persistable properties, therefore it cannot be stored.

Well, once I understood the problem, I refocused on what was important - getting the project done in a reasonable amount of time so I managed to overcome this hiccup.

## Design
I think that my design is pretty intuitive, simple and clean. It is highly responsive as you will notice while playing around with the app, filtering, or adding a comment or a receipt.

On the first page, you can enter any of the email that the api provides, or just "admin" and you will get a list with all the expenses.

The infinite scroll I find to be a nice touch. It allows you to load as many expenses as you need and filter through them as opposed to classical pagination which would mean filtering just one page at a time. 

If you have the patience to scroll through all the 168 expenses, you'll find a small surprise at the end.


Overall, this project was fun. I hope you guys like it! ✨
