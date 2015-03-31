#Signature Carroll
Welcome to the documentation for our new TCP application, which we hope will serve your needs in finding community, accessibility, and resources in the **Carroll Gardens** neighborhood of Brooklyn, New York.  

As always, if there are any questions, comments, or concerns, please email me at *abtyang@gmail.com* or find me on *[GitHub](github.com/sunsheeppoplar)*.

###Features
+Opening Message
When developers connect via telnet, they'll see an opening message that provides the **date** and **topic** for that day. 

+RSVPing
Users must use the following format to add themselves
````
/rsvp first name + last name + email (pluses are spaces)

example: /rsvp Abner Yang abtyang@gmail.com

````
+Head Count
Developers can see how many other people have RSVPed so far!
````
/headcount 
````
+Date and Topic
Anyone can see when the next meeting is and what we'll be talking about.
````
/whatsup
````
+Host
This project is hosted at the IP address: 45.55.155.39 8888
+Administrative Notes
````
	1. To reset the list of those who RSVPed, input the following: /clear /carrollwascatholic

	2. Still working on multi-word topics. For now you'll just have to enter /datetopic /decOfInd with the date in the third slot and topic in the fourth after that. 

	3. To print the list of those those who RSVPed, input /print /holysee
````



###Further Documentation
If interested in the development of this project, there are [code snippets](https://github.com/sunsheeppoplar/signature_carroll/blob/master/snippets_server.txt) that were tested and for various reasons (noted within the document) deemed unusable or a better solution was discovered. The script for client was used in the testing of this server. Thanks for your interest!