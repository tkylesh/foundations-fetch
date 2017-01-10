#Fetch

The goal of this exercise is to assist the student in understanding the request and response cycle of the HTTP protocol while reviewing aspects of AngularJS, AJAX. This is a multi-part exercise requiring both in-class and ouside of class work.

## Rules

1. Students must start assignment in class.
2. Use  https://nss-responsecodes.herokuapp.com/docs to determine with endpoints to use.
3. Students must determin how 
3. Implement the needed User Experience leveraging the following User Stories:

```
As an Anonymous User,
I want to make an HTTP request using a HTTP Method and URL I specify,
So that I can examine the response times, the size of the returned content. 
```

```
As an Anonymous User,
When I select POST as the HTTP Method,
Then a previously hidden form appears,
And I fill out the form and submit it,
So that I can examine the response times, the size of the returned content. 
```

### Part 1: Boilerpate and Setup

Create an AngularJS (1.x).


### Part 2: UI Implementation & AJAX

Your Home page should have a drop-down, text input form element with a "Fetch" button, all centered on the page. The user should be able to supply an HTTP Method and URL. Clicking the "Fetch" button will make an AJAX call to the specified URL.

Your drop-down element should contain/allow for the user to use the **GET**, **POST**, **OPTIONS** and **HEAD** HTTP methods.


### Part 3: Display Responses

On the completion of the AJAX call, the response **status code**, **URL**, HTTP **method** used for the original request and **response time** and **content size** should be displayed on the page.
