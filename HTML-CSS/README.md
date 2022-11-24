# BIENCAPS Training

## **HTML**
HTML means HyperText markup language.<br/>
HyperText means HTML allows us to create link for other page and user can jump on that page using that link quickly<br/>

Structure of the web is depend on the HTML code. HTML uses some elements to define this structure.<br/>
### Elmenets in HTML<br/>
    - Contains two tags and inforamtion lies between those tags. 
    - One is opening tag and another is closing tag.
### TAGS<br/>
    - In HTML it gives some commands to the browser that how to deal with information that lies between opening and closing tag.
    - Tags uses angular brackets <>.
    - Opening tag: <> here p shows tag's purpose
    - Closing tag uses extra '/' as a prefix for opening tag. for example </p>
### ATTRIBUTES<br/>
    - It tell us more about the element. For example for <img> src is used as an attribute to provide the path of the image.
    - attribute is mainly divided into two parts name and value. name means which attribute we are using and what value will be. 
    - value should be placed inside double quotes and assigned using equal sign. 
    - All name and value should be written in lowercase(not compulsion but its convention.
    - example: <a href="www.google.com">Google</a>
    
HTML uses some elements like html, head, body etc to define the structure of the page. Let's see one simple code.

#### HTML DEMO Code 
```html
<!DOCTYPE html>
<html>
<head>
        <title>First Page</title>
</head>
<body>
        Hello, My name is Kajal.
</body>
</html>
```
#### Description
- Here First line show which type of code is used in this document. This is the notation for HTML5. 
- **HTML** tag encloses the html code. 
- **HEAD** tag contains some information about html document. for example: style, script, language, metadata. 
- **TITLE** tag is used to display the title of the page title bar of the browser. 
- **BODY**  tag contains all the information that can be displayed on the page window. It holds acutal content of the page.
<hr/>

### TEXT
#### HEADING<br/>
In HTML there 6 levels of the heading --> h1,h2,h3,h4,h5,h6. Content of h1 displayed in largest and content of h6 displayed in smallest font.

#### Paragraph
Paragraph is written using `<p>` element. For example `<p> This is paragraph</p>`. By default browser shows the paragraph on new line.

#### TEXT FORMATING
1. Bold: Whenever we want a text in bold then `<b>` tag is used.
2. Italic: By enclosing the text inside `<i>` element we can make characters appear italic.

#### Subscript and SuperScript
`<sub> and <sup>` elements are used for Subscript and SuperScript respectively.

#### WHITE SPACE
Whenever we add extra spaces browser treats it as single space. This is known as white space collapsing. 

#### LINE BREAK AND HORIZONTAL RULES
break `<br />` tag is used to break the line. <br />
`<hr />` tag is used to add horizontal rule.
#### Strong and Emphasis
`<strong>` is used to show the text which has some strong importance. Browser shows it in bold style.<br />
`<em>` is used to mark the stress emphasis

#### Quotations
`<blockquote>` and `<q>` is used for quotation but difference is that blockquote is for long text or entire para and q is for small text quotation. 

**`<ins>`** element is used to to show the element which is inserted into the document. It it shown using underline. <br />
**`<del>`** element can show the text that has been deleted. it is usually shown using strikethrough.
<hr/>

### List
There are three types of lists
1. Ordered List: List items are numbered using some number and alphabets. `<ol>` elements is used. and `<li>` is used for eahc list item.
2. Unordered List: List items are listed using bulltets `<ul>` is used for this type.
3. Defination List: There are some set of terms and there defination.  
<hr/>

### Links
For Links `<a>` elements is used. user can click on the text written inside opening `<a>` and closing `<a>` tag. 
We can specify which site to visit using href attribute.
`<a href="www.google.com">Click here</a>`<br />
There are two types of addresses provided in href. 
1. Absolute address: Used for linking pages of other website 
2. Relative address: Used for linking same pages of same website<br/>
If we want to jump on the same website then we can take help of id.
`<a href="#about-us">`

We can achieve following by using this feature
    - Links from one website to another
    - Links from one page to another page on the same website
    - Links from one part of a web page to another part of the same page
    - Links that open in a new browser window
    - Links that start up your email program and address a new email to someone


<hr/>

### Images
`<img>` element is used for displaying image in web.<br/>
Attribute used in `<img>` tag are
1. src: to give the path of the image
2. alt: alternative text if image is not loaded
3. height: specify the height of the image in pixels
4. width: specify width of the image in pixels
4. align: it aligns the image as per the value.(removed in HTML5)

`<figure>` element is used to combine the image and caption.<br/>
Inside the figure element we can add `<img>` elements and `<figcaption>` to display the caption.
<hr/>

### Table
When we want to show data in tabular format then we can go for `<table>` element. 
Following tags are used for creation of table
1. `<th>`: table header (by default displayed in bold format)
2. `<tr>`: represent entire row
3. `<td>`: table data<br/>
Refer the following code
```html
<table>
        <tr>
            <th>Degree</th>
            <th>marks</th>
            <th>passing year</th>
        </tr>
        <tr>
            <th>SSC</th>
            <td>88.80</td>
            <td>2015</td>

        </tr>
        <tr>
            <th>HSC</th>
            <td>81.23</td>
            <td>2017</td>
        </tr>
        <tr>
                <th>Eng</th>
                <td>79.2</td>
                <td>2021</td>
        </tr>
</table>
```
If there are multiple data in header, body and footer section of table then we can use `<thead>`, `<tbody>`, `<tfoot>`

#### Spanning in table: 
When common data is present in row or column we can combine those cells using spanning
rowspan attribute is used for combining two or more rows
colspan attribute is for column combining
```html
<h2>Time table: With spanning</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>8AM</th>
          <th>9AM</th>
          <th>10AM</th>
          <th>11AM</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td rowspan="2">C</td>
            <td>C++</td>
            <td colspan="2">Java</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>C</td>
            <td>C++</td>
            <td>Java</td>
          </tr>
    </tbody>
    </table>
```
<hr/>

### Forms
In normal printing format, we have to fill forms. Same concept is used in web.<br/>
`<form>` element is used to create forms.<br/>
There are some attributes which are used with form
1. action: which specify where to send the data
2. method: values are get or post. get means it append data to the url part and it is used fo simple forms. post is used for large and sensetive data.

##### input element
When we think about form, some main basic things come in our mind. i.e name, password, textual area etc.<br/>
To create this and to make empty input field `<input>` tag is used. <br/>
Lets see most probably used input types like text, number , radio etc

Input tag and its attributes
	<input type="text" id="input_id">

Here type and id is optional if we dont provide type then by default text input will be shown
id is used to uniquely identify the element in the DOM(Document object model).
```html
    <label for="name">Enter first name:</label>
    <input type="text" id="name" />
```
Label provides caption. When we add label to input, it is not only visually connected to input but also programmatically connected too. 
When we click on label, browser passes focus to its associated input field 
`for` attribute is used to establish connection between label and input
`id` of input element is given to for attribute of label. This will connect label ‘Enter first name’ to input

Some different values used with type attribute:
1. text(default)
2. number
3. file
4. image
5. date
6. time
7. month
8. week
9. datetime
10. datetime-local
11. button
12. checkbox
13. radio
14. password
15. range
16. email
17. search
18. submit
19. url
20. color
21. Tel
23. hidden

##### select element
To create drop down menu `<select>` and `<option>` tags are used. option is nestes within the select.
```html
<select >
    <option>USA</option>
    <option>UK</option>
    <option>India</option>
    <option>Japan</option>
</select><br/>
```
##### TextArea
textarea is used for more than one line text input.
`<textarea rows="8" cols="80">Enter your Comments...</textarea>`

##### Validation
Validation in HTML is done using required attribute. In HTML5 we can specify on required attribute without giving any value. 
`<input type="text" name="name" required>`
<hr/>

## CSS
### Introduction
CSS is an abbreviation for Cascading Style sheet.<br/>
It is used to control the layout and appearance of the HTML element.<br/>
There are two terms which are used to style any element.<br/>
1. Properties: Indicates which aspects we want to change
2. Value: specifies the setting which we want choose use for the property.
These two are seperated by comma and termianted by semicolon<br/>
    `color: yellow;` 
Here color is property and yellow is value. <br/>
This pair is either added in the HTML element using style attribute or in External CSS file selector.<br/>
If we are using External CSS or Internal then this pair should be enclosed Inside curly braces. <br/>
p {
    color: yellow;
}

CSS can be added to HTML documents in 3 ways:
1. Inline: Using Style attribute
2. Internal CSS: using `<style>` in `<head>`
3. External CSS: using `<link>` element to link the external CSS file.

##### Inline
In this way, we can directly mention CSS style inside the HTML element using style attribute.<br/>
Suppose we want to give colour to the `<p>` element.<br/>
`<p style="color=blue;">` 

##### Internal CSS
In this way, style element is added in the head section.<br/>
```html
<head>
    <style> 
        p {
            color: yellow;
            font-style: Arial;
        }
    </style> 
</head>
```
##### External CSS
CSS file is referenced using `<link>` element from head section.<br/>
`<link href="cssfile.css" type="text/css" rel="stylesheet">`

##### Selectors
Selectors are used to rule the particular HTML element.<br/>
There are different ways to select the HTML element.
1. Universal Selector(*)
2. Type selector(h1,p,h2)
3. Class Selector(.note)
4. Id Selector(#)
5. Child Selector(li>a)
6. Descendent selector(p a)
7. Adjecent Sibling selector(h1+p): selects `<p>` element which is next to `<h1>`
8. general sibling selector(h1~p): selects two or more `<p>` after `<h1>` 

Here (>), (space) , (+), (~) called as **combinators**.<br/>

##### Attribute Selector
this is used to select a HTML element which has specific attribute. Like input[type], select the input element which has attribute type.<br/>
input[type="radio"] --> this will select input element which has type=radio attribute. There are other ways to select the attribute too.<br/>

##### Pseudo Element and Pseudo Class
This is used to style specific part of an element. For example first line , fist element.<br/>
**Syntax is:**
```
selector::pseudo-element {
  property: value;
}
```
```
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```
This will change the style of the first line from paragraph.
<hr/>

### Color
In CSS colors are mention in four ways.
1. Color name: In css there are some in build names of color.
2. rgb: Every color is mixture of red, green and blue. so using rgb(100.123,205)
3. rgba: here a is used for alpha. using this rgba we can specify opacity along with red, green and blue. 
4. Hex values

In css3 hsl and hsla is also added.
1. hsl(hue, saturation, lightness)
2. hsla(hue, saturation, lightness, opacity)
<hr/>

### Border
Border can be applied to every element. <br/>
There are some parameters applies to border like width, style , color. <br/>
We can apply style at on line using border property or else different values can be assigned using width, style and color. <br/>
```html
border: 2px solid red
border-style: solid;
border-width: 2px;
border-color: red;
```
<hr/>

### CSS Margins
Margins means space around an elements. We can create space around every html element. Using margin property.<br/>
`margin: 5px;`<br/>
It applies 5px space around an element. To add margin at specific side we can use top, left etc.<br/> 
1. margin-top
2. margin-right
3. margin-left
4. margin-bottom
<hr/>

### CSS Padding
Padding is applied inside the box. How element is located inside the box is depend on padding values.<br/>
`padding: 5px;` applied to every side
1. padding-top
2. padding-right
3. padding-left
4. padding-bottom
<hr/>

### Height and Width
Heigth and width properties specifies the elements width and height according to page size. 
<hr/>

### Outline 
Outline is the region which lies outside border. <br/>
`outline: #4CAF50 solid 10px;`<br/>
There are different properties are used to style outline.
1. outline-style
2. outline-color
3. outline-width
4. outline-offset
5. outline
<hr/>

### Text
##### Properties for text styling in CSS
1. font-family
2. font-size: specify size in pt, px or percentage
3. font-weight: values are normal and bold
4. font-style: normal, italic, oblique
5. text-transform: uppercase, lowercase , capitalize
6. text-decoration: underline, none, overline, line-throgh
7. line-height
8. letter-spacing
9. word-spacing
10. text-align: left, right, center, justify
11. text-indent

### List Style
##### List properties:
1. list-style
2. list-style-type
3. list-style-position
4. list-style-image

### Table Style
##### Table properties
1. width
2. height
3. padding
4. text-transform
5. letter-spacing
6. font-size
7. border-top
8. border-bottom
9. text-align
10. background-align
11. empty cells: take there values as show, inherit and hide 
12. border-spacing 
13: border-collapse

### Form style 
We can style the form using some css properties like color, background-color, border, margin , padding etc.<br />
**cursor** is used to change the appearance of the cursor. It takes some values like
1. default
2. pointer
3. crosshair
4. move
5. text 
6. wait
7. help
8. url()

### Layout
##### Display property
Every element in HTML has defualt display properties. It takes two values block and inline.<br />
block display means element starts on the new line and takes full width available. for example.<br />
- `<p>`
- `<div>`
- `<h1> to <h6>`
- `<form>`
- `<header> and <footer>`
- `<section>`

Inline elements doesn't start on new line and only takes up as much width as required. They are placed inside block elements. Examples
- `<span>`
- `<img>`
- `<b>`
- `<i>`
- `<em>`

Layout Defines the struture of the page. div, p, secitons tags are used to define the layout.<br /> 
**Position** propety is used to define the position of the element. <br />
there are three types of positions 
1. Normal position
2. Relative positioning
3. Absolute positioning
4. fixed position

##### overflow
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.
The overflow property has the following values:
1. visible - Default. The overflow is not clipped. The content renders outside the element's box
2. hidden - The overflow is clipped, and the rest of the content will be invisible
3. scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
4. auto - Similar to scroll, but it adds scrollbars only when necessary

##### CSS layout- horizontal and vertical align
**Center align element**<br/>
When we set margin: auto then this element will be aligned at center.

##### style background 
properties are:
1. background-color
2. background-image
2. background-repeat
3. background-position
4. background

##### Specificity 
This allows browser to select most specific and appropriate css style for HTML element if there is comflict. <br/>
For example, if there is universal selector(*) and ID selector is specifid then preference is given to ID selector.<br/>
Hierarchy of the Selector: 
1. Inline Styles 
2. IDs 
3. Classes, attributes and pseudo-classes
4. Elements and pseudo-elements

If there is equal specificity then lastest rule is applied. 

##### CSS 2D transforms
CSS transforms allow you to move, rotate, scale, and skew elements. **transform** property is used to create transformation.<br/>
With the CSS transform property you can use the following 2D transformation methods:
1. translate()
2. rotate()
3. scaleX()
4. scaleY()
5. scale()
6. skewX()
7. skewY()
8. skew()
9. matrix()

##### CSS 3D transforms
Like 2d, **transform** property is used to create transformation.<br/>
With the CSS transform property you can use the following 3D transformation methods:
1. rotateX()
2. rotateY()
3. rotateZ()

##### CSS Transitions
CSS transitions allows you to change property values smoothly, over a given duration.<br/>
Properties: 
- transition
- transition-delay
- transition-duration
- transition-property
- transition-timing-function

##### CSS animation
**properties:**
1. @keyframes
2. animation-name
3. animation-duration
4. animation-delay
5. animation-iteration-count
6. animation-direction
7. animation-timing-function
8. animation-fill-mode
9. animation

**values for animation-direction**
1. normal 
2. reverse
3. alternate 
4. alternate-reverse

**values for animation-timing-function**
1. **ease** - Specifies an animation with a slow start, then fast, then end slowly (this is default)
2. **linear** - Specifies an animation with the same speed from start to end
3. **ease-in** - Specifies an animation with a slow start
4. **ease-out** - Specifies an animation with a slow end
5. **ease-in-out** - Specifies an animation with a slow start and end
6. **cubic-bezier(n,n,n,n)** - Lets you define your own values in a cubic-bezier function

**values for animation-fill-mode**
1. **none** - Default value. Animation will not apply any styles to the element before or after it is executing
2. **forwards** - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
3. **backwards** - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
4. **both** - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions

Short hand for animation:  `{animation: example 5s linear 2s infinite alternate;}`
<hr/>
