function changeContent(id1, content1, id2, title)
{
	var contentChange1 = document.getElementById(id1);
  // var contentChange2 = document.getElementById(id2);

  if (title == "The Hate U Give")
  {
  	var contentChange2 = document.getElementById(id2);
    contentChange2.innerHTML = info;
  }


  if (title == "On The Come Up")
  {
    var contentChange2 = document.getElementById(id2);
    contentChange2.innerHTML = otcuinfo;
  }


	contentChange1.src = content1;

}
var info = "Sixteen-year-old Starr Carter moves between two worlds: the poor neighborhood where she lives and the fancy suburban prep school she attends. The uneasy balance between these worlds is shattered when Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Khalil was unarmed. Soon afterward, his death is a national headline. Some are calling him a thug, maybe even a drug dealer and a gangbanger. Protesters are taking to the streets in Khalil's name. Some cops and the local drug lord try to intimidate Starr and her family. What everyone wants to know is: what really went down that night? And the only person alive who can answer that is Starr. But what Starr does or does not say could upend her community. It could also endanger her life.";

var otcuinfo = "Sixteen-year-old Bri wants to be one of the greatest rappers of all time. Or at least make it out of her neighborhood one day. As the daughter of an underground rap legend who died before he hit big, Bri’s got big shoes to fill. But now that her mom has unexpectedly lost her job, food banks and shutoff notices are as much a part of Bri’s life as beats and rhymes. With bills piling up and homelessness staring her family down, Bri no longer just wants to make it—she has to make it. On the Come Up is Angie Thomas’s homage to hip-hop, the art that sparked her passion for storytelling and continues to inspire her to this day. It is the story of fighting for your dreams, even as the odds are stacked against you; of the struggle to become who you are and not who everyone expects you to be; and of the desperate realities of poor and working-class black families.";
