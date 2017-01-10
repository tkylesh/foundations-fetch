#Fetch

The goal of this exercise is to assist the student in understanding the request and response cycle ofthe HTTP protocol while reviewing aspects of AngularJS, AJAX. This is a multi-part exercise requiring both in-class and ouside of class work.

## Rules

1. Students must start assignment in class.
2. Implement the required features in order as defined in this read me.
3. Implement the needed User Experience leveraging the following User Stories:

```
As an Anonymous User,
I want to be able to make an HTTP request using a HTTP Method and URL I specify,
So that I can examine the response times, the size of the returned content. 
```

```
As an Anonymous User,
When I select **POST** as the HTTP Method,
Then a previously hidden form appears,
And I fill out the form and submit it,
So that I can examine the response times, the size of the returned content. 
```

### Part 1: Boilerpate and Setup

Create an AngularJS (1.x).


### Part 2: UI Implementation & AJAX

Your Home page should have a drop-down, text input form element with a "Fetch" button, all centered on the page. The user should be able to supply an HTTP Method and URL. Clicking the "Fetch" button will make an AJAX call to the specified URL. On the completion of the AJAX call, the response **status code**, **URL**, HTTP **method** used for the original request and **response time** and **content size** should be displayed on the page.

Your drop-down element should contain/allow for the user to use the **GET**, **POST**, **OPTIONS** and **HEAD** HTTP methods.

(Instructor may supply students a mockup for this page)


### Part 3: Gather Responses

Add a "Store" button to your Home page that will **POST** the **status code**, **URL** and **response time** for each request in your Web Application's Database. This will require the student to implement a `POST /api/Response` API endpoint (i.e. requiring the use of the **POST** HTTP method).


Students will implement a `GET /api/Response`  that will display a list of all persisted responses from the database. Angular will be used to obtain response data from our API endpoint.
