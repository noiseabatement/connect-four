Simple connect four game. There are two colors which represents each player. EventListener added acording to columns. When a player clicks a column function checks if
last elemnt has a className. if className is empty a circle fills that element regardless of element that has been clicked by player. if className is not empty breaks the
loop and start all over again and checks one level upper element. And so on... 
Every time after a circle filled changes color and evaluates for match acoording to winningArray(thanks to Github Copilot). If match has been found "pointer-event:none"
class is been added to whole board and Play Again button appears which is basicly refresh page. Also at this time "red or yellow wins" animation flashes.

things that have to solved:
i couldn't manage to drop circles from exactly same location(which is top of the board). As a temporarily solution animation starts from 2000px above.
After a macth winner text sometimes flashes sometimes not. I really have no idea. it's behavior is completely random.
A small circle can be added to show who has the turn.
Generally lots of styling issue.
