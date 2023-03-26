# About this site
This website is a personal landing page built as part of my application for the Founders and Coders foundation course. It's meant to showcase my progress learning to code
so far and to showcase my current work projects. I also wanted to highlight my unique background in the performing arts and make a page that felt stylistically interesting and bold to reflect that. 

## Some goals I had for this project:
- Envision and execute a bold styling for the site.
- Push my boundaries of making the site responsive to different screen sizes.
- To learn more about making content A11y friendly.

## Site responsiveness and design:
I had strong design goals for this sight and wanted it to look interesting on any screen. To this end I have experimented with some of the following:

  ### Units 
  - vw : Although I had previously used some other responsive units such as em and rem, this was my first time working with vw / vh. <br>
  **What it does well**  <br>
  Sizing images and overlapping elements: Makes it super simple to keep overlapping design ideas looking great at any size. For example on this site the Keep Moving Forward inset always stays in the area of the underlying photo that I want it to. 
  <br> <br>
  **What it doesn't do great** <br>
  Although I used this unit for font sizing as well on this site initially, in hindsight I wouldn't have. At the extremes, things get to big or small respectively. I adjusted this with media queries however, setting this with em or rem would have made this much simpler. 
  
### JS and responsiveness 
- window.innerWidth: This was great in setting conditionals to allow for styling that's being set by js at different screen widths, for example in the hamburger menu for this site.

### How to improve in the future
I wish that I had taken a mobile first approach. It's a bad habit of mine to design for coding setup, about half my screen width, and then set media queries for smaller and larger screen sizes. In the future I think building for smaller screens and then adding complexity is the way to go.

## A11y:
### Accessible Hamburger Menu
For this site I felt a hamburger menu would fit the style of the website best but was worried this would cause accessibility issues. 
<br> I found this [site:](http://www.ashleysheridan.co.uk/blog/Making+an+Accessible+Hamburger+Menu) to work from and founding it really useful. <br>
Some takeaways:
- Use a real button for the hamburger.
- Use aria-expanded and have it value change whenever the menu is expanded or collasped.
- Use roles to help point to element fucntionality.


### Semantic html

Wherever possible I tried to use semantic HTML tags instead of relying on ```div``` tags. Probably the biggest improvement I found here was in use ```figure``` tags
to nest my images inside for styling purposes. Also I tried to break the page into distinct sections with clear ```Section ``` tags. 


## Colours and fonts

### Headers 
  [Oswald Regular](https://fonts.google.com/specimen/Oswald) 
 
 ### Paragraphs etc..
  [Quatro Cento Regular](https://fonts.google.com/specimen/Quattrocento)
  
  ### Colour Palette
    
   See the colour palette this site [here](https://coolors.co/fffcf2-ccc5b9-403d39-252422-eb5e28)
