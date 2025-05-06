<!--1 Enumerate the differences between JSON and XML -->
JSON is a javascript object notation that stores data in key-value pairs format, it accepts different data types like string, number boolean and some other ones while XML which is known as eXtensible Markup Language allows for user-defined tags for flexibility and easy understandability of the program, it makes use of tags and properties and its data type is of string by default.

<!--2. Enumerate the flexibility of Json arrays and also the concept of nested JSON objects and provide real world examples. -->
1. JSON arrays are flexible because the can have arrays withing their arrays which is known as nested arrays.
2. JSON arrays can have variety of sizes meaning it doesn't have a fixed size
3. JSON arrays can contain objects, meaning they can store objects in them as their own elements 
4. JSON arrays are flexible because they accept variety of data types in an array container 

Concept of nested JSON objects
Nested JSON object structure is where objects are embedded within other objects which is for organizing and arranging data in an undestandable and clean way.
An example of nested jSON objects- address is a nested object in the main object 
{
    "id": 1,
    "name": "Erioluwa",
    "address": {  
      "street": "010 Modupe Street",
      "city": "Ibadan",
      "zip": "100001"
    }
}

A real world example can be json array for storing all the user post details per user on a social media platform

{
  "user": {
    "username": "Erioluwa01",
    "posts": [
      {
        "id": "P1",
        "content": "Recently had my java class",
        "likes": 12000,
        "comments": [
          { "user": "friend1", "text": "Thats nicee!" },
          { "user": "friend2", "text": "Weldone👏." }
        ]
      }
    ]
  }
}

<!-- 3. Discuss the application of JSON in data transmission, storage and configuration. -->

JSON IN Data Transmission - JSON helps in the passing or exchange of data between the client and the server. It is not bulky meaning it'd be faster to be transmitted, it is easily read by humanns and machine parsable, its suported by javascript.
JSON in data storage- its data is easily stored in a way that it's easy to read, write and share, its easy to edit, its light weight unlike xml and it doesn't require complex schemas.
JSON in configuration- helps define application settings in a structured and readable format, its also easy to edit by  developers, its supported by mordern frameworks and it supports nesting for heirachical configuration.



<!-- 4. Discuss the role of comments in json and how they are beneficial. How are they different from what you know in xml -->
Comments in XML are lines of statements that are not visible by the code meaning when the program is ran the goup of commented statements would not run with the program. Comments basically help us make our code more understandable for whoever reads it and helps explain what is happening in the block of code. Whereby comments in JSON are not supported by JSON and an error would occur if comments are written in json.



<!--5. Define and explain what you know on JSON schema   -->
JSON Schema is a format for describing the structure and validation rules of JSON data. It defines what a valid JSON object should look like and what properties are required, what data types are allowed, and what the values should conform to.