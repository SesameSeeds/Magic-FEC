## `To Do/Thoughts:`

### `Display Cards`

Not sure why it is displaying 21 cards at a time, but it's close to 20...  ¯\_(ツ)_/¯  </br>

Definitely would like to find a way to deal with the occasional dupe I found, though my implementation to pull the cards with imageURL only, helped with most of the issues on that front.

### `Loading`

This works, could definitely be styled better, but it does its thing.


### `Sort`

I would like to figure out a way to implement search and sort together, which I feel could potentially be a better option than having them exist separately.

### `Search`

Search does search for a letter in the name, however, it doesn't specifically search for cards that start with the letter S
(for example).  Instead it searches for any card that has whatever letter you're looking for in any part of the name.</br>

Another frustration includes what seems to be a timeout issue with the search. You search, cards are returned, however, after a moment they turn back.  Additionally the display buggers up what minimal design exists.</br>  

This came about with my inability to get search and infinite scroll to play together nicely, with more time and research, I'm sure I could.

### `Design`

Absolutely could look better, with cards and components more evenly displayed. </br>

Would refactor the search function to not only display at the top right, but to have the cards searched for display properly.  Instead of landing in a direct line under the search bar and buggering up the flow in general. </br>

Would like to place loader differently, as my first priority was to get it to work I did not focus on the placement

### `Testing`

I did not have time to write tests, sorry about that.  I think it came with a freebie though.

### `Refactoring`

As I learned React on the fly with the most Googling I have ever done, my code is far from consistent, DRY, or perfect.  I do need to go back and add more keys, as well as, remove some deprecated lifecycles. </br>

I would love to display the cards initially with just an image and name and then click on the card to open to another page or modal maybe, where you could get more detailed informaiton, but that's a lot more googling than I have time for right now.

