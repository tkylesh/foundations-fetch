#Fetch

The goal of this exercise is to assist the student in understanding the request and response cycle of the HTTP protocol while reviewing aspects of AngularJS, AJAX. This is a multi-part exercise requiring both in-class and ouside of class work.

## Rules

1. Students must start assignment in class.
2. Students will find URLs on the net to use for this exercise. Expirement with websites you use frequently.
2. Visit https://nss-responsecodes.herokuapp.com/docs for additional endpoints to use for this assignment.
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

Create an AngularJS (1.x) app.


### Part 2: UI Implementation & AJAX

Your Home page should have a text input (for URL), select/dropdown (containing HTTP methods) and a "Fetch" button all centered on the page. The user should be able to select an HTTP Method from the dropdown. Clicking the "Fetch" button will make an AJAX call to the specified URL.

Your drop-down element should contain/allow for the user to use the **GET**, **POST**, **OPTIONS** and **HEAD** HTTP methods.


### Part 3: Display Responses

On the completion of the AJAX call, display the:

- request **URL**,
- request **HTTP method**
- **response time** and
- **content size** of the response

The student determines how this information looks/styled when it's displayed.


## Related Reading/Documentaion

- [List of HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [List of Common HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
