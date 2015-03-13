#Concept:
This site is a clone of jsfiddle.net, and it functions as a live coding environment to test HTML, JavaScript and CSS code.  You can create a new sandbox and test out your code by pressing the render button or you can checkout some of the saved sandboxes other users have created.  Create an account to save your sandboxes.

#Technologies:
The site is a Ruby on Rails app that interacts with a PostgreSQL database to save information and Backbone.js to present pages.  When sandboxes are rendered, the code is extracted from the HTML code highlighted textarea and rendered inside an iFrame.  User authentication and saving sandboxes is all done with AJAX queries to a custom API.  Bootstrap is used for a stylish navbar.

#Todos:
- Improve loading of Ace highlighting library in Backbone.js, because there is a millisecond where you see the unstyled textarea before it loads the syntax highlighting 
