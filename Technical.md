## Structure & Architecture
### 1. Components
Based on the vite template - there are 2 locations for components:
-    <b>Pages</b> - for components that are used for route navigation.
-    <b>Components</b> - for components that are used within the pages.
I tried to make some of the components reusable, but some are specific to the page.


### 2. Router
In order to make the load time smaller, and since most of the heavy lift is in d3 and
the chart component, I decided to lazy load the StockDetails page.


### 3. testing
I used vitest for testing. Since there is not much of BL here - I did tear up some functions
from the Chart creation component into a util and tested its funcions with heavy mocking on top of d3.
Just added 2 tests to demonstrate the ability. Of course it requires more testing and more coverage.

### 4. Refactoring
Chart component needs a better refactoring, both for readability and for reusability.
Just made something that works to demonstrate the ability.

### 5. Store
I used Pinia for state management. I created a store for the stock data and a store for the chart data.
Beware that stocks fetched from server are not a good use case for using store. Store is
for data that is shared between components, and relatively static.
In this case, I used it to demonstrate the ability, and since it was a requirement.

### 6. Re-Rendering and performance
Haven't seen something worth investing yet. Need to explore the framework a little bit more
to see if there is a need for optimization. For performance, I used the lazy loading, see section2.
